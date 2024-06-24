// Função para detectar ferramentas de desenvolvimento
const detectDevTools = () => {
  const onKeyPress = (event) => {
    if (event.code === 'F12' || (event.ctrlKey && event.shiftKey && event.code === 'I')) {
      alert('Ferramentas de desenvolvimento estão bloqueadas.');
      // Você pode adicionar ações adicionais aqui, como redirecionar ou alterar comportamento.
      // Porém, note que isso pode ser contornado por desenvolvedores experientes.
    }
  };

  window.addEventListener('keydown', onKeyPress);
};

// Executar a detecção de ferramentas de desenvolvimento
detectDevTools();

// Código original começa aqui

// common number filters
Vue.filter("toFixed", (num, asset) => {
  const precision = asset === "USDT" ? 5 : 2; // Define 5 decimal places for USDT, 2 for others
  return Number(num).toFixed(precision);
});

Vue.filter("toMoney", (num) => {
  return Number(num)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

// component for creating line chart
Vue.component("linechart", {
  props: {
    width: { type: Number, default: 400, required: true },
    height: { type: Number, default: 40, required: true },
    values: { type: Array, default: [], required: true },
  },
  template: '<canvas :width="width" :height="height"></canvas>',
  mounted() {
    this.render();
  },
  updated() {
    this.render();
  },
  methods: {
    render() {
      const canvas = this.$el;
      const ctx = canvas.getContext("2d");

      const { width, height, values } = this;

      ctx.clearRect(0, 0, width, height);

      const max = Math.max(...values);
      const min = Math.min(...values);
      const range = max - min || 1;
      const chartValues = values.map((val) => ((val - min) / range) * height);

      ctx.beginPath();
      ctx.moveTo(0, height - chartValues[0]);

      for (let i = 1; i < chartValues.length; i++) {
        const x = (i / (chartValues.length - 1)) * width;
        const y = height - chartValues[i];
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "#7f8fa4";
      ctx.stroke();
    },
  },
});

new Vue({
  el: "#app",
  data: {
    search: "",
    limit: 20,
    asset: "USDT",
    status: 0,
    loaderVisible: true,
    coins: [],
    longShortRatios: {}, // Current long/short ratios
    longShortRatioHistory: {}, // History of long/short ratios
    sort: {
      key: "token",
      order: "asc",
    },
    socket: null,
  },
  created() {
    this.loadCoins();
    this.connectSocket();
    this.loadLSRFromLocalStorage(); // Carregar dados do local storage ao iniciar
    setInterval(this.saveLSRToLocalStorage, 300000); // Agendar consulta a cada 5 minutos (300000 milissegundos)
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
      return this.coins.filter((c) =>
        c.token.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    loadCoins() {
      fetch("https://fapi.binance.com/fapi/v1/ticker/24hr")
        .then((response) => response.json())
        .then((data) => {
          // Filter coins that end with "USDT" and are not in the blocked list
          const filteredData = data.filter((d) => {
            return d.symbol.endsWith("USDT") &&
              !["DGBUSDT", "WAVESUSDT", "MDTUSDT","RADUSDT","STRAXUSDT","SLPUSDT","IDEXUSDT","CVXUSDT","SNTUSDT","STPTUSDT","CTKUSDT","GLMRUSDT"].includes(d.symbol);
          });

          this.coins = filteredData.map((d) => {
            return {
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
              history: [
                Number(d.lastPrice) * 0.95,
                Number(d.lastPrice) * 1.05,
                Number(d.lastPrice),
              ],
              style: {
                gain: d.priceChange > 0,
                loss: d.priceChange < 0,
              },
              longShortRatio: null, // Initialize current longShortRatio as null
            };
          });

          this.loadLongShortRatios();
          this.status = 1;
        })
        .catch((error) => {
          console.error("Failed to load coins:", error);
          this.status = -1;
        });
    },
    loadLongShortRatios() {
      const symbols = this.coins.map((c) => c.symbol);
      const longShortRatios = {};

      const fetchLongShortRatio = (symbol) => {
        return fetch(
          `https://binance.com/futures/data/globalLongShortAccountRatio?symbol=${symbol}&period=5m`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
            return response.json();
          })
          .then((data) => {
            if (data.length >= 30) { // Ensure there are at least 14 entries
              longShortRatios[symbol] = Number(data[29].longShortRatio).toFixed(4);
            } else {
              longShortRatios[symbol] = 'N/A'; // If there are less than 14 entries
            }
            this.saveLSRToLocalStorage(); // Após carregar, salvar no local storage
          })
          .catch((error) => {
            console.error(`Failed to load long/short ratio for ${symbol}:`, error);
            longShortRatios[symbol] = 'N/A';
          });
      };

      Promise.all(symbols.map((symbol) => fetchLongShortRatio(symbol)))
        .then(() => {
          this.longShortRatios = longShortRatios;
          this.updateCoinsWithRatios();
        });
    },
    updateCoinsWithRatios() {
      this.coins = this.coins.map((coin) => {
        return {
          ...coin,
          longShortRatio: this.longShortRatios[coin.symbol] || 'N/A',
        };
      });
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
        setTimeout(() => this.connectSocket(), 1000);
      };

      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        this.socket.close();
      };
    },
    updateCoinPrices(data) {
      const updatedCoins = this.coins.map((coin) => {
        const ticker = data.find((t) => t.s === coin.symbol);
        if (ticker) {
          return {
            ...coin,
            close: Number(ticker.c),
            change: Number(ticker.p),
            percent: Number(ticker.P),
            assetVolume: Number(ticker.q),
            trades: Number(ticker.n),
          };
        }
        return coin;
      });

      this.coins = updatedCoins;
    },
    saveLSRToLocalStorage() {
      const lsrData = JSON.stringify(this.longShortRatios); // Convert to JSON string
      localStorage.setItem("lsr", lsrData); // Save to localStorage with key "lsr"
    },
    loadLSRFromLocalStorage() {
      const lsrData = localStorage.getItem("lsr"); // Retrieve from localStorage
      if (lsrData) {
        this.longShortRatios = JSON.parse(lsrData); // Parse JSON back to object
        this.updateCoinsWithRatios(); // Update coins with loaded longShortRatios
      }
    },
  },
});
