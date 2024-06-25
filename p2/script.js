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

Vue.filter("formatVolume", (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(3) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(3) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(3) + 'K';
  } else {
    return num.toFixed(3);
  }
});

// Componente para criar gráfico de linha
Vue.component("linechart", {
  props: {
    width: { type: Number, default: 400, required: true },
    height: { type: Number, default: 40, required: true },
    values: { type: Array, default: () => [], required: true },
    volatility: { type: Number, default: 0, required: true },
  },
  template: 
    `<div>
      <canvas :width="width" :height="height"></canvas>
      <span v-if="volatility >= 5" style="margin-left: 10px;"></span>
      <span v-else-if="volatility < 5" style="margin-left: 10px;"></span>
    </div>`,
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
      const canvas = this.$el.querySelector('canvas');
      if (!canvas) return;

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

        // Definir cor da linha como verde
        ctx.strokeStyle = "#33f702";

        ctx.lineTo(x, y);
      });

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
      latestCoin: null,
    };
  },
  created() {
    this.loadCoins();
    this.connectSocket();
    this.loadLSRFromLocalStorage();
    this.loadLastListedCoin(); // Load last listed coin on initialization
    setInterval(this.loadLastListedCoin, 3600000); // Update every 1 hour (3600000 ms)
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
            volatility: 0, // Inicialmente 0, você pode calcular isso conforme necessário
          }));
        this.status = 1;

        // Carregar os ratios long/short uma vez na inicialização
        await this.loadLongShortRatios();
        this.saveLSRToLocalStorage();
        // Atualizar a cada 5 minutos
        setInterval(this.loadLongShortRatios, 300000);
      } catch (error) {
        console.error("Failed to load coins:", error);
        this.status = -1;
      }
    },
    async loadLastListedCoin() {
      try {
        const response = await fetch("https://fapi.binance.com/fapi/v1/exchangeInfo");
        const data = await response.json();
        const symbols = data.symbols;

        // Ordenar por data de listagem e pegar a última
        symbols.sort((a, b) => new Date(b.onboardDate) - new Date(a.onboardDate));
        const latestSymbol = symbols[0].symbol;
        const latestCoin = this.coins.find(c => c.symbol === latestSymbol);

        if (latestCoin) {
          this.latestCoin = latestCoin;
          document.getElementById('latest-coin').innerHTML = `Última moeda listada: ${this.latestCoin.token}`;

          // Save latest coin to local storage
          localStorage.setItem("latestCoin", JSON.stringify(this.latestCoin));
        }
      } catch (error) {
        console.error("Failed to load latest coin:", error);
      }
    },
    async loadLongShortRatios() {
      const symbols = this.coins.map(c => c.symbol);

      const fetchLongShortRatio = async (symbol) => {
        try {
          const response = await fetch(`https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=${symbol}&period=5m`);
          if (!response.ok) throw new Error('Failed to fetch');
          const data = await response.json();
          const ratio = data.length >= 30 ? Number(data[29].longShortRatio).toFixed(4) : 'N/A';
          this.longShortRatios = {
            ...this.longShortRatios,
            [symbol]: ratio,
          };
          this.updateCoinsWithRatios();
        } catch (error) {
          console.error(`Failed to load long/short ratio for ${symbol}:`, error);
          this.longShortRatios = {
            ...this.longShortRat          [symbol]: 'N/A',
        };
      }
    };

    for (const symbol of symbols) {
      await fetchLongShortRatio(symbol);
    }
  },
  updateCoinsWithRatios() {
    this.coins = this.coins.map(coin => ({
      ...coin,
      longShortRatio: this.longShortRatios[coin.symbol] || 'N/A',
    }));

    // Save to local storage
    this.saveLSRToLocalStorage();
  },
  connectSocket() {
    const socket = new WebSocket("wss://fstream.binance.com/ws/!ticker@arr");
    this.socket = socket;

    socket.onopen = () => {
      console.log("Socket connected");
    };

    socket.onerror = (error) => {
      console.error("Socket error:", error);
    };

    socket.onmessage = (event) => {
      try {
        const tickers = JSON.parse(event.data);
        this.updateCoinsFromSocket(tickers);
      } catch (error) {
        console.error("Error parsing message from socket:", error);
      }
    };

    socket.onclose = () => {
      console.log("Socket closed, reconnecting...");
      setTimeout(() => {
        this.connectSocket();
      }, 5000);
    };
  },
  updateCoinsFromSocket(tickers) {
    tickers.forEach(ticker => {
      const symbol = ticker.s;
      const coinIndex = this.coins.findIndex(c => c.symbol === symbol);
      if (coinIndex !== -1) {
        const coin = this.coins[coinIndex];
        coin.close = parseFloat(ticker.c);
        coin.open = parseFloat(ticker.o);
        coin.high = parseFloat(ticker.h);
        coin.low = parseFloat(ticker.l);
        coin.change = parseFloat(ticker.p);
        coin.percent = parseFloat(ticker.P);
        coin.assetVolume = parseFloat(ticker.q);
        coin.trades = parseInt(ticker.n);
        coin.style = {
          gain: coin.change > 0,
          loss: coin.change < 0,
        };
        this.$set(this.coins, coinIndex, coin);
      }
    });
  },
  saveLSRToLocalStorage() {
    localStorage.setItem("longShortRatios", JSON.stringify(this.longShortRatios));
  },
  loadLSRFromLocalStorage() {
    const storedLSR = localStorage.getItem("longShortRatios");
    if (storedLSR) {
      this.longShortRatios = JSON.parse(storedLSR);
      this.updateCoinsWithRatios();
    }
  },
  loadLastListedCoin() {
    const storedCoin = localStorage.getItem("latestCoin");
    if (storedCoin) {
      this.latestCoin = JSON.parse(storedCoin);
      document.getElementById('latest-coin').innerHTML = `Última moeda listada: ${this.latestCoin.token}`;
    } else {
      this.fetchAndSaveLatestCoin();
    }
  },
  async fetchAndSaveLatestCoin() {
    try {
      const response = await fetch("https://fapi.binance.com/fapi/v1/exchangeInfo");
      const data = await response.json();
      const symbols = data.symbols;

      // Ordenar por data de listagem e pegar a última
      symbols.sort((a, b) => new Date(b.onboardDate) - new Date(a.onboardDate));
      const latestSymbol = symbols[0].symbol;
      const latestCoin = this.coins.find(c => c.symbol === latestSymbol);

      if (latestCoin) {
        this.latestCoin = latestCoin;
        document.getElementById('latest-coin').innerHTML = `Última moeda listada: ${this.latestCoin.token}`;

        // Save latest coin to local storage
        localStorage.setItem("latestCoin", JSON.stringify(this.latestCoin));
      }
    } catch (error) {
      console.error("Failed to load latest coin:", error);
    }
  },
  sortCoins(key) {
    if (this.sort.key === key) {
      this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.sort.key = key;
      this.sort.order = 'asc';
    }
  },
},
});


