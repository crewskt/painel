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
      template: `
        <div>
          <canvas :width="width" :height="height"></canvas>
          <span v-if="volatility >= 5" style="margin-left: 10px;"></span>
          <span v-else-if="volatility < 5" style="margin-left: 10px;"></span>
        </div>
      `,
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
          lastListedCoin: null, // Adicionar esta linha
        };
      },
      created() {
        this.loadCoins();
        this.connectSocket();
        this.loadLSRFromLocalStorage();
        this.loadLongShortRatios();
        setInterval(this.loadLongShortRatios, 300000); // Atualizar a cada 5 minutos

        this.updateLastListedCoin(); // Atualizar a última moeda listada
        setInterval(this.updateLastListedCoin, 3600000); // Atualizar a cada 1 hora
      },
      methods: {
        async updateLastListedCoin() {
          try {
            const response = await fetch('https://fapi.binance.com/fapi/v1/ticker/24hr');
            const data = await response.json();
            this.lastListedCoin = data[data.length - 1].symbol;
          } catch (error) {
            console.error('Erro ao atualizar a última moeda listada:', error);
          }
        },
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
            setTimeout(this.connectSocket, 5000);
          };

          this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
            this.socket.close();
          };
        },
        updateCoinPrices(data) {
          const updatedCoins = this.coins.map(coin => {
            const updatedData = data.find(d => d.s === coin.symbol);
            if (updatedData) {
              const updatedCoin = {
                ...coin,
                close: Number(updatedData.c),
                change: Number(updatedData.p),
                percent: Number(updatedData.P),
                assetVolume: Number(updatedData.q),
                trades: Number(updatedData.n),
                history: [...coin.history.slice(-2), Number(updatedData.c)],
                style: {
                  gain: updatedData.p > 0,
                  loss: updatedData.p < 0,
                },
              };
              return updatedCoin;
            }
            return coin;
          });
          this.coins = updatedCoins;
        },
        loadLSRFromLocalStorage() {
          const longShortRatios = localStorage.getItem("longShortRatios");
          if (longShortRatios) {
            this.longShortRatios = JSON.parse(longShortRatios);
            this.updateCoinsWithRatios();
          }
        },
      },
    });
