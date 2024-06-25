// Função para detectar ferramentas de desenvolvimento
const detectDevTools = () => {
  const onKeyPress = (event) => {
    if (event.code === 'F12' || (event.ctrlKey && event.shiftKey && event.code === 'I')) {
      alert('Ferramentas de desenvolvimento estão bloqueadas.');
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
  return Number(num).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
});

// Adicionando a instância do Vue.js
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
      lastListedCoin: null, // Adicionando estado para última moeda listada
    };
  },
  created() {
    this.loadCoins();
    this.connectSocket();
    this.loadLSRFromLocalStorage();
    this.loadLongShortRatios(); // Iniciar o carregamento dos ratios long/short
    setInterval(this.loadLongShortRatios, 300000); // Atualizar a cada 5 minutos
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
      return keyMap[this.sort.key];
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
        this.lastListedCoin = data[data.length - 1].symbol;

        this.loadLongShortRatios();
        this.status = 1;
      } catch (error) {
        console.error("Failed to load coins:", error);
        this.status = -1;
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
          this.saveLSRToLocalStorage(); // Salvar no localStorage após a atualização
        } catch (error) {
          console.error(`Failed to load long/short ratio for ${symbol}:`, error);
          this.longShortRatios = {
            ...this.longShortRatios,
            [symbol]: 'N/A',
          };
        }
      };

      // Initial fetch
      await Promise.all(symbols.map(symbol => fetchLongShortRatio(symbol)));

      // Set interval to update every 5 minutes
      setInterval(async () => {
        await Promise.all(symbols.map(symbol => fetchLongShortRatio(symbol)));
      }, 300000); // 5 minutes in milliseconds
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
    saveLSRToLocalStorage() {
      localStorage.setItem('longShortRatios', JSON.stringify(this.longShortRatios));
    },
    loadLSRFromLocalStorage() {
      const savedRatios = localStorage.getItem('longShortRatios');
      if (savedRatios) {
        this.longShortRatios = JSON.parse(savedRatios);
        this.updateCoinsWithRatios();
      }
    },
    connectSocket() {
      this.socket = new WebSocket("wss://fstream.binance.com/ws/!ticker@arr");
      this.socket.onmessage = this.onSocketMessage;
      this.socket.onopen = () => console.log("Connected to the websocket");
      this.socket.onclose = () => {
        console.log("Disconnected from the websocket. Reconnecting...");
        setTimeout(this.connectSocket, 1000);
      };
    },
    onSocketMessage(event) {
      const data = JSON.parse(event.data);
      data.forEach(update => {
        const coin = this.coins.find(c => c.symbol === update.s);
        if (coin) {
          coin.close = Number(update.c);
          coin.change = Number(update.p);
          coin.percent = Number(update.P);
          coin.assetVolume = Number(update.q);
          coin.trades = Number(update.n);
        }
      });
    },
  },
});
