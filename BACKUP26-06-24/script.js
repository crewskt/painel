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
  data() {
    return { cx: 0, cy: 0 };
  },
  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    chartPoints() {
      const data = this.getPoints();
      const last = data.length ? data[data.length - 1] : { x: 0, y: 0 };
      const list = data.map((d) => `${d.x},${d.y}`);
      this.cx = last.x;
      this.cy = last.y;
      return list.join(" ");
    },
  },
  methods: {
    getPoints() {
      const width = this.width;
      const height = this.height;
      const min = Math.min(...this.values);
      const max = Math.max(...this.values);
      const range = max > min ? max - min : height;
      const gap = this.values.length > 1 ? width / (this.values.length - 1) : 1;
      const halfHeight = height / 2;

      return this.values.map((value, index) => {
        const normalizedValue = 2 * ((value - min) / range - 0.5);
        const x = index * gap;
        const y = -normalizedValue * halfHeight * 0.8 + halfHeight;
        return { x, y };
      });
    },
  },
  template: `
  <svg :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <polyline class="color" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" :points="chartPoints" />
    <circle class="color" :cx="cx" :cy="cy" r="4" fill="#fff" stroke="none" />
  </svg>`,
});

// vue instance
new Vue({
  el: "#app",
  data: {
    endpoint: "wss://fstream.binance.com/ws/!ticker@arr",
    iconbase: "./icons/",
    cache: {},
    coins: [],
    asset: "USDT",
    search: "",
    sort: "percent",
    order: "desc",
    limit: 50,
    status: 0,
    sock: null,
    cx: 0,
    cy: 0,
  },
  computed: {
    coinsList() {
      let list = [...this.coins];
      const search = this.search.replace(/[^\s\w\-\.]+/g, "").trim();

      if (this.asset) {
        list = list.filter((i) => i.asset === this.asset);
      }
      if (search.length > 1) {
        const reg = new RegExp(`^(${search})`, "i");
        list = list.filter((i) => reg.test(i.token));
      }
      if (this.sort) {
        list = this.sortList(list, this.sort, this.order);
      }
      if (this.limit) {
        list = list.slice(0, this.limit);
      }
      return list;
    },
    loaderVisible() {
      return this.status !== 2;
    },
    sortLabel() {
      const labels = {
        token: "Token",
        percent: "Percent",
        close: "Price",
        change: "Change",
        assetVolume: "Volume",
        tokenVolume: "Volume",
        trades: "Trades",
      };
      return labels[this.sort] || "Default";
    },
  },
  methods: {
    sortBy(key, order) {
      this.order = this.sort === key ? (this.order === "asc" ? "desc" : "asc") : order || "asc";
      this.sort = key;
    },
    filterAsset(asset) {
      this.asset = String(asset || "BTC");
    },
    setLimit(limit) {
      this.limit = parseInt(limit) || 0;
    },
    onSockOpen() {
      this.status = 1;
      console.info("WebSocketInfo: Connection open (" + this.endpoint + ").");
    },
    onSockClose() {
      this.status = 0;
      console.info("WebSocketInfo: Connection closed (" + this.endpoint + ").");
      setTimeout(this.sockInit, 10000);
    },
    onSockError(err) {
      this.status = -1;
      console.error("WebSocketError:", err.message || err);
      setTimeout(this.sockInit, 10000);
    },
    onSockData(e) {
      const list = JSON.parse(e.data) || [];
      list.forEach(item => {
        const coin = this.getCoinData(item);
        coin.history = this.cache[coin.symbol]?.history || this.fakeHistory(coin.close);
        if (coin.history.length > 100) coin.history = coin.history.slice(-100);
        coin.history.push(coin.close);
        this.cache[coin.symbol] = coin;
      });
      this.coins = Object.values(this.cache);
      this.status = 2;
    },
    sockInit() {
      if (this.status > 0) return;
      try {
        this.status = 0;
        this.sock = new WebSocket(this.endpoint);
        this.sock.addEventListener("open", this.onSockOpen);
        this.sock.addEventListener("close", this.onSockClose);
        this.sock.addEventListener("error", this.onSockError);
        this.sock.addEventListener("message", this.onSockData);
      } catch (err) {
        console.error("WebSocketError:", err.message || err);
        this.status = -1;
        this.sock = null;
      }
    },
    sockClose() {
      if (this.sock) {
        this.sock.close();
      }
    },
    fakeHistory(close) {
      const num = close * 0.0001;
      const min = -Math.abs(num);
      const max = Math.abs(num);
      return Array.from({ length: 50 }, () => close + Math.random() * (max - min) + min);
    },
    getCoinData(item) {
      const reg = /^([A-Z]+)(BTC|ETH|BNB|USDT|TUSD)$/;
      const symbol = item.s.replace(/[^\w\-]+/g, "").toUpperCase();
      const token = symbol.replace(reg, "$1");
      const asset = symbol.replace(reg, "$2");
      const pair = `${token}/${asset}`;
      const icon = `${this.iconbase}${token.toLowerCase()}.png`;
      const close = parseFloat(item.c);
      const percent = parseFloat(item.P);
      const sign = percent >= 0 ? "+" : "";
      const arrow = percent >= 0 ? "▲" : "▼";
      const info = `${pair} ${close.toFixed(8)} (${arrow} ${sign}${percent.toFixed(2)}% | ${sign}${parseFloat(item.p).toFixed(8)})`;
      const style = percent > 0 ? "gain" : percent < 0 ? "loss" : "";

      return {
        symbol,
        token,
        asset,
        pair,
        icon,
        open: parseFloat(item.o),
        high: parseFloat(item.h),
        low: parseFloat(item.l),
        close,
        change: parseFloat(item.p),
        percent,
        trades: parseInt(item.n),
        tokenVolume: Math.round(item.v),
        assetVolume: Math.round(item.q),
        sign,
        arrow,
        style,
        info,
      };
    },
    sortList(list, key, order) {
      return list.sort((a, b) => {
        const valA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const valB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
        if (order === "asc") return valA < valB ? -1 : valA > valB ? 1 : 0;
        return valA > valB ? -1 : valA < valB ? 1 : 0;
      });
    },
  },
  mounted() {
    this.sockInit();
  },
  destroyed() {
    this.sockClose();
  },
});
