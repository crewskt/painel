// common number filters
Vue.filter("toFixed", (num, asset) => {
  const precision = asset === "USDT" ? 5 : 2; // Define 5 decimal places for USDT, 8 for others
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
    longShortRatios: {},
    sort: {
      key: "token",
      order: "asc",
    },
    socket: null,
    blockedCoins: ["DGBUSDT", "MDTUSDT","WAVESUSDT"], // Moedas bloqueadas
  },
  created() {
    this.loadCoins();
    this.connectSocket();
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
      return this.coins
        .filter((c) => !this.blockedCoins.includes(c.symbol)) // Filtrar moedas bloqueadas
        .filter((c) =>
          c.token.toLowerCase().includes(this.search.toLowerCase())
        );
    },
  },
  methods: {
    loadCoins() {
      fetch("https://fapi.binance.com/fapi/v1/ticker/24hr")
        .then(response => response.json())
        .then(data => {
          // Filtra as moedas que terminam com "USDT"
          const filteredData = data.filter(d => d.symbol.endsWith("USDT"));
          this.coins = filteredData.map(d => {
            return {
              symbol: d.symbol,
              pair: d.symbol,
              token: d.symbol.replace("USDT", ""),
              asset: "USDT",
              icon: `https://betabot.store/icons/${d.symbol
                .replace("USDT", "")
                .toLowerCase()}.png`,
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
              longShortRatio: null, // Initialize longShortRatio as null
            };
          });
          this.loadLongShortRatios();
          this.status = 1;
        })
        .catch(error => {
          console.error("Failed to load coins:", error);
          this.status = -1;
        });
    },
    loadLongShortRatios() {
      const symbols = this.coins.map(c => c.symbol);
      const longShortRatios = {};

      const fetchLongShortRatio = (symbol) => {
        fetch(`https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=${symbol}&period=1d`)
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              longShortRatios[symbol] = data[0].longShortRatio;
              const coin = this.coins.find(c => c.symbol === symbol);
              if (coin) {
                coin.longShortRatio = data[0].longShortRatio;
              }
            }
          })
          .catch(error => {
            console.error(`Failed to load longShortRatio for ${symbol}:`, error);
          });
      };

      symbols.forEach(symbol => {
        fetchLongShortRatio(symbol);
      });
    },
    connectSocket() {
      this.socket = new WebSocket("wss://fstream.binance.com/ws/!ticker@arr");
      this.socket.onopen = () => {
        this.loaderVisible = false;
        this.status = 2;
      };
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        data.forEach((update) => {
          const coin = this.coins.find((c) => c.symbol === update.s);
          if (coin) {
            coin.close = Number(update.c);
            coin.open = Number(update.o);
            coin.high = Number(update.h);
            coin.low = Number(update.l);
            coin.change = Number(update.p);
            coin.percent = Number(update.P);
            coin.assetVolume = Number(update.q);
            coin.trades = Number(update.n);
          }
        });
      };
      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        this.status = -1;
      };
      this.socket.onclose = () => {
        console.log("WebSocket connection closed");
        this.status = 0;
        setTimeout(this.connectSocket, 5000);
      };
    },
    setLimit(limit) {
      this.limit = limit;
    },
    sortBy(key, order) {
      this.sort.key = key;
      this.sort.order = order;
    },
    filterAsset(asset) {
      this.asset = asset;
    },
  },
});
