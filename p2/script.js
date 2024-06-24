// Função para detectar ferramentas de desenvolvimento
const detectDevTools = () => {
  const onKeyPress = (event) => {
    if (event.code === 'F12' || (event.ctrlKey && event.shiftKey && event.code === 'I')) {
      alert('Ferramentas de desenvolvimento estão bloqueadas.');
      // Ações adicionais podem ser adicionadas aqui.
    }
  };

  window.addEventListener('keydown', onKeyPress);
};

// Executar a detecção de ferramentas de desenvolvimento
detectDevTools();

// Filtros de número comuns
Vue.filter("toFixed", (num, asset) => {
  const precision = asset === "USDT" ? 5 : 2;
  return Number(num).toFixed(precision);
});

Vue.filter("toMoney", (num) => {
  return Number(num)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

// Componente para criar gráfico de linha
Vue.component("linechart", {
  props: {
    width: { type: Number, default: 400, required: true },
    height: { type: Number, default: 40, required: true },
    values: { type: Array, default: () => [], required: true },
  },
  template: '<canvas :width="width" :height="height"></canvas>',
  watch: {
    values: {
      handler: 'renderChart',
      deep: true,
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const canvas = this.$el;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, this.width, this.height);

      const max = Math.max(...this.values);
      const min = Math.min(...this.values);
      const range = max - min || 1;
      const scaledValues = this.values.map(val => ((val - min) / range) * this.height);

      ctx.beginPath();
      ctx.moveTo(0, this.height - scaledValues[0]);

      scaledValues.forEach((val, index) => {
        const x = (index / (scaledValues.length - 1)) * this.width;
        const y = this.height - val;
        ctx.lineTo(x, y);
      });

      ctx.strokeStyle = "#7f8fa4";
      ctx.stroke();
    },
  },
});

new Vue({
  el: "#app",
  data() {
    return {
      search: "",
      limit: 20,
      asset: "USDT",
      status: 0,
      loaderVisible: true,
      coins: [],
      longShortRatios: {},
      longShortRatioHistory: {},
      sort: {
        key: "token",
        order: "asc",
      },
      socket: null,
    };
  },
  created() {
    this.loadCoins();
    this.connectSocket();
    this.loadLSRFromLocalStorage();
    setInterval(this.saveLSRToLocalStorage, 300000);
  },
  computed: {
    sortLabel() {
      const keyMap = {
        token: "Token",
        close: "Price",
        assetVolume: "Volume",
        percent: "Percent",
        trades: "Trades",
      };
      return `Ord: ${keyMap[this.sort.key]}`;
    },
    coinsList() {
      let sortedCoins = this.filteredCoins;
      if (this.sort.key) {
        sortedCoins = sortedCoins.sort((a, b) => {
          const aVal = a[this.sort.key];
          const bVal = b[this.sort.key];
          const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
          return this.sort.order === "asc" ? comparison : -comparison;
        });
      }
      return this.limit > 0 ? sortedCoins.slice(0, this.limit) : sortedCoins;
    },
    filteredCoins() {
      return this.coins.filter(c => c.token.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  methods: {
    async loadCoins() {
      try {
        const response = await fetch("https://fapi.binance.com/fapi/v1/ticker/24hr");
        const data = await response.json();
        this.coins = data.filter(d => d.symbol.endsWith("USDT") && 
          !["DGBUSDT", "WAVESUSDT", "MDTUSDT","RADUSDT","STRAXUSDT","SLPUSDT","IDEXUSDT","CVXUSDT","SNTUSDT","STPTUSDT","CTKUSDT","GLMRUSDT"].includes(d.symbol))
          .map(d => ({
            symbol: d.symbol,
            pair: d.symbol,
            token: d.symbol.replace("USDT", ""),
            asset: "USDT",
            icon: `https://betabot.store/icons/${d.symbol.replace("USDT", "").toLowerCase()}.png`,
            close: Number(d.lastPrice),
            open: Number(d.openPrice),
            high: Number(d.highPrice),
            low: Number(d.lowPrice),
            change: Number(d.priceChange),
            percent: Number(d.priceChangePercent),
            assetVolume: Number(d.volume),
            trades: Number(d.count),
            history: [Number(d.lastPrice) * 0.95, Number(d.lastPrice) * 1.05, Number(d.lastPrice)],
            style: {
              gain: d.priceChange > 0,
              loss: d.priceChange < 0,
            },
            longShortRatio: null,
          }));
        this.loadLongShortRatios();
        this.status = 1;
      } catch (error) {
        console.error("Failed to load coins:", error);
        this.status = -1;
      }
    },
    async loadLongShortRatios() {
      const symbols = this.coins.map(c => c.symbol);
      const longShortRatios = {};

      const fetchLongShortRatio = async (symbol) => {
        try {
          const response = await fetch(`https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=${symbol}&period=5m`);
          if (!response.ok) throw new Error('Failed to fetch');
          const data = await response.json();
          longShortRatios[symbol] = data.length >= 30 ? Number(data[29].longShortRatio).toFixed(4) : 'N/A';
          this.saveLSRToLocalStorage();
        } catch (error) {
          console.error(`Failed to load long/short ratio for ${symbol}:`, error);
          longShortRatios[symbol] = 'N/A';
        }
      };

      await Promise.all(symbols.map(symbol => fetchLongShortRatio(symbol)));
      this.longShortRatios = longShortRatios;
      this.updateCoinsWithRatios();
    },
    updateCoinsWithRatios() {
      this.coins = this.coins.map(coin => ({
        ...coin,
        longShortRatio: this.longShortRatios[coin.symbol] || 'N/A',
      }));
    },
    setLimit(limit) {
      this.limit = limit;
    },
    filterAsset(asset) {
      this.asset = asset;
    },
    sortBy(key, order) {
      this.sort.key = key;
      this.sort.order = order;
    },
    connectSocket() {
      const url = "wss://fstream.binance.com/stream";
      const stream = "!ticker@arr";
      this.socket = new WebSocket(`${url}?streams=${stream}`);

      this.socket.onopen = () => {
        this.loaderVisible = false;
        console.log("WebSocket connection opened.");
      };

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data).data;
        this.updateCoinPrices(data);
      };

      this.socket.onclose = () => {
        console.log("WebSocket connection closed. Reconnecting...");
        setTimeout(this.connectSocket, 1000);
      };

      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        this.socket.close();
      };
    },
    updateCoinPrices(data) {
      this.coins = this.coins.map(coin => {
        const ticker = data.find(t => t.s === coin.symbol);
        if (ticker) {
          const newHistory = coin.history.slice(-29).concat(Number(ticker.c));
          return {
            ...coin,
            close: Number(ticker.c),
            change: Number(ticker.p),
            percent: Number(ticker.P),
            assetVolume: Number(ticker.q),
            trades: Number(ticker.n),
            history: newHistory,
          };
        }
        return coin;
      });
    },
    saveLSRToLocalStorage() {
      const lsrData = JSON.stringify(this.longShortRatios);
      localStorage.setItem("lsr", lsrData);
    },
    loadLSRFromLocalStorage() {
      const lsrData = localStorage.getItem("lsr");
      if (lsrData) {
        this.longShortRatios = JSON.parse(lsrData);
        this.updateCoinsWithRatios();
      }
    },
  },
});
