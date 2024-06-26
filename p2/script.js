// Filtros de número comuns
Vue.filter("toFixed", (num, asset) => {
  if (num == null) return '0.00';
  const precision = asset === "USDT" ? 5 : 2;
  return Number(num).toFixed(precision);
});

Vue.filter("toMoney", (num) => {
  if (num == null) return '0';
  return Number(num).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

Vue.filter("formatVolume", (num) => {
  if (num == null) return '0';
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

Vue.filter("toPercent", (num) => {
  if (num == null) return '0.00%';
  return `${(num * 100).toFixed(2)}%`;
});

// Componente para criar gráfico de linha
Vue.component("linechart", {
  props: {
    width: { type: Number, default: 400, required: true },
    height: { type: Number, default: 40, required: true },
    values: { type: Array, default: () => [], required: true },
    volatility: { type: Number, default: 0, required: true },
    lineColor: { type: String, default: '#33f702' },
    lineWidth: { type: Number, default: 2 }
  },
  template: `
    <div>
      <canvas :width="width" :height="height"></canvas>
      <span v-if="volatility >= 10" style="margin-left: 2px; color: green;">🔼High Volatility</span>
      <span v-else style="margin-left: 2px; color: red;">🔽Low Volatility</span>
    </div>
  `,
  watch: {
    values: 'renderChart',
    width: 'renderChart',
    height: 'renderChart',
    lineColor: 'renderChart',
    lineWidth: 'renderChart'
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

      if (this.values.length === 0) return;

      const max = Math.max(...this.values);
      const min = Math.min(...this.values);
      const range = max - min || 1;
      const scaledValues = this.values.map(val => ((val - min) / range) * this.height);

      ctx.beginPath();
      ctx.moveTo(0, this.height - scaledValues[0]);

      scaledValues.forEach((val, index) => {
        const x = (index / (scaledValues.length - 1)) * this.width;
        const y = this.height - val;

        ctx.strokeStyle = this.lineColor;
        ctx.lineWidth = this.lineWidth;
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
      sort: {
        key: "token",
        order: "asc",
      },
      socket: null,
      lastListedCoin: null, // Estado para a última moeda listada
      isDarkMode: false, // Estado para modo escuro
      favoriteCoins: [], // Estado para moedas favoritas
    };
  },
  created() {
    this.loadCoins();
    this.connectSocket();
    this.loadLSRFromLocalStorage();
    this.loadLongShortRatios(); // Iniciar o carregamento dos ratios long/short
    setInterval(this.loadLongShortRatios, 300000); // Atualizar a cada 5 minutos
    this.loadFavoriteCoins(); // Carregar moedas favoritas do localStorage
    this.resetPercentagesAt9PM(); // Adiciona a lógica para zerar as porcentagens às 21h
  },
  computed: {
    sortLabel() {
      const keyMap = {
        token: "Token",
        close: "Price",
        assetVolume: "Volume",
        percent: "Percent",
        trades: "Trades",
        longShortRatio: "Long/Short",
        volatility: "Volatility",
      };
      return ` ${keyMap[this.sort.key]}`;
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
    favoriteCoinsList() {
      return this.coins.filter(c => this.favoriteCoins.includes(c.symbol));
    }
  },
  methods: {
    async loadCoins() {
      try {
        const response = await fetch("https://fapi.binance.com/fapi/v1/ticker/24hr");
        const data = await response.json();
        this.coins = data.filter(d => d.symbol.endsWith("USDT") && 
          !["DGBUSDT", "WAVESUSDT", "MDTUSDT","RADUSDT","STRAXUSDT","SLPUSDT","IDEXUSDT","CVXUSDT","SNTUSDT","STPTUSDT","CTKUSDT","GLMRUSDT","AGIXUSDT","OCEANUSDT"].includes(d.symbol))
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

        // Obter a última moeda listada
        await this.loadLastListedCoin();

        this.loadLongShortRatios();
        this.status = 1;
      } catch (error) {
        console.error("Failed to load coins:", error);
        this.status = -1;
      }
    },
    async loadLastListedCoin() {
      try {
        const response = await fetch("https://fapi.binance.com/fapi/v1/exchangeInfo");
        const data = await response.json();
        const symbols = data.symbols.filter(s => s.contractType === "PERPETUAL" && s.symbol.endsWith("USDT"));
        symbols.sort((a, b) => new Date(b.onboardDate) - new Date(a.onboardDate));
        this.lastListedCoin = symbols[0].symbol.replace("USDT", "");
      } catch (error) {
        console.error("Failed to load last listed coin:", error);
      }
    },
    async loadLongShortRatios() {
      const symbols = this.coins.map(c => c.symbol);

      const fetchLongShortRatio = async (symbol) => {
        const cacheKey = `longShortRatio_${symbol}`;
        const cachedData = localStorage.getItem(cacheKey);
        const cacheDuration = 5 * 60 * 1000; // 5 minutos em milissegundos
        
        if (cachedData && (Date.now() - JSON.parse(cachedData).timestamp < cacheDuration)) {
          this.longShortRatios = {
            ...this.longShortRatios,
            [symbol]: JSON.parse(cachedData).ratio,
          };
          this.updateCoinsWithRatios();
          return;
        }

        try {
          const response = await fetch(`https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=${symbol}&period=5m`);
          if (!response.ok) throw new Error('Failed to fetch');
          const data = await response.json();
          const ratio = data.length >= 30 ? Number(data[30].longShortRatio).toFixed(4) : 'N/A';
          this.longShortRatios = {
            ...this.longShortRatios,
            [symbol]: ratio,
          };
          this.updateCoinsWithRatios();
          localStorage.setItem(cacheKey, JSON.stringify({ ratio, timestamp: Date.now() }));
        } catch (error) {
          console.error(`Failed to fetch long/short ratio for ${symbol}:`, error);
          this.longShortRatios = {
            ...this.longShortRatios,
            [symbol]: 'N/A',
          };
        }
      };

      for (const symbol of symbols) {
        await fetchLongShortRatio(symbol);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo antes da próxima requisição
      }

      setInterval(async () => {
        for (const symbol of symbols) {
          await fetchLongShortRatio(symbol);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo antes da próxima requisição
        }
      }, 300000); // 5 minutos em milissegundos
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
          const volatility = ((ticker.h - ticker.l) / ticker.o) * 100; // Exemplo de cálculo de volatilidade
          return {
            ...coin,
            close: Number(ticker.c),
            change: Number(ticker.p),
            percent: Number(ticker.P),
            assetVolume: Number(ticker.q),
            trades: Number(ticker.n),
            history: newHistory,
            volatility: volatility,
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
    toggleFavorite(symbol) {
      if (this.favoriteCoins.includes(symbol)) {
        this.favoriteCoins = this.favoriteCoins.filter(coin => coin !== symbol);
      } else {
        this.favoriteCoins.push(symbol);
      }
      this.saveFavoriteCoins();
    },
    saveFavoriteCoins() {
      localStorage.setItem("favoriteCoins", JSON.stringify(this.favoriteCoins));
    },
    loadFavoriteCoins() {
      const savedFavorites = localStorage.getItem("favoriteCoins");
      if (savedFavorites) {
        this.favoriteCoins = JSON.parse(savedFavorites);
      }
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    },
    resetPercentagesAt9PM() {
      const now = new Date();
      const next9PM = new Date();
      next9PM.setHours(21, 0, 0, 0);
      if (now > next9PM) {
        next9PM.setDate(now.getDate() + 1);
      }
      const timeUntilNext9PM = next9PM - now;
      setTimeout(() => {
        this.coins = this.coins.map(coin => ({
          ...coin,
          percent: 0,
        }));
        this.resetPercentagesAt9PM();
      }, timeUntilNext9PM);
    },
  },
});
