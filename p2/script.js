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

Vue.filter("formatVolume", (value) => {
  if (value >= 1000000000) return (value / 1000000000).toFixed(2) + "B";
  if (value >= 1000000) return (value / 1000000).toFixed(2) + "M";
  if (value >= 1000) return (value / 1000).toFixed(2) + "K";
  return value.toString();
});

Vue.component("linechart", {
  props: ["values", "width", "height"],
  template: `<canvas :width="width" :height="height"></canvas>`,
  mounted() {
    const ctx = this.$el.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, "rgba(0, 255, 0, 0.5)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0.5)");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: this.values.map((_, i) => i + 1),
        datasets: [
          {
            data: this.values,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: gradient,
            fill: true,
            borderWidth: 2,
            pointRadius: 0,
            lineTension: 0,
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });
  },
});

new Vue({
  el: "#app",
  data() {
    return {
      search: "",
      limit: 10,
      sortLabel: "Ord: Price",
      asset: "USDT",
      coins: [],
      longShortRatios: [],
      socket: null,
      loaderVisible: true,
      status: 0,
    };
  },
  computed: {
    coinsList() {
      let filteredCoins = this.coins.filter((coin) =>
        coin.token.toLowerCase().includes(this.search.toLowerCase())
      );

      if (this.asset !== "All") {
        filteredCoins = filteredCoins.filter(
          (coin) => coin.asset === this.asset
        );
      }

      return filteredCoins.slice(0, this.limit);
    },
  },
  mounted() {
    this.loadCoins();
    this.loadLongShortRatios();
    this.connectSocket();
  },
  methods: {
    loadCoins() {
      fetch("https://api.binance.com/api/v3/ticker/24hr")
        .then((response) => response.json())
        .then((data) => {
          this.coins = data.map((ticker) => {
            const volatility = ((ticker.highPrice - ticker.lowPrice) / ticker.openPrice) * 100;
            return {
              symbol: ticker.symbol,
              token: ticker.symbol.replace('USDT', ''),
              asset: 'USDT',
              close: Number(ticker.lastPrice),
              change: Number(ticker.priceChange),
              percent: Number(ticker.priceChangePercent),
              assetVolume: Number(ticker.quoteVolume),
              trades: Number(ticker.count),
              history: Array(30).fill(Number(ticker.lastPrice)), // Exemplo de histórico
              volatility: volatility,
            };
          });

          this.sortBy('close', 'desc'); // Ordena por preço como padrão
          this.loaderVisible = false;
        });
    },
    loadLongShortRatios() {
      fetch("https://fapi.binance.com/futures/data/globalLongShortAccountRatio")
        .then((response) => response.json())
        .then((data) => {
          this.longShortRatios = data;
          this.updateCoinsWithRatios();
          this.saveLSRToLocalStorage();
        });
    },
    updateCoinsWithRatios() {
      this.coins = this.coins.map((coin) => {
        const ratio = this.longShortRatios.find(
          (r) => r.symbol === coin.symbol
        );
        return {
          ...coin,
          longShortRatio: ratio ? ratio.longShortRatio : null,
        };
      });
    },
    setLimit(limit) {
      this.limit = limit;
    },
    filterAsset(asset) {
      this.asset = asset;
    },
    sortBy(field, order) {
      const sortedCoins = [...this.coins].sort((a, b) => {
        if (order === 'asc') {
          return a[field] > b[field] ? 1 : -1;
        } else {
          return a[field] < b[field] ? 1 : -1;
        }
      });

      this.coins = sortedCoins;
      this.sortLabel = `Ord: ${field.charAt(0).toUpperCase() + field.slice(1)}`;
    },
    connectSocket() {
      this.socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        this.updateCoinPrices(data);
      };

      this.socket.onclose = () => {
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
  },
});
