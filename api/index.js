const fetch = require("node-fetch");

const getBtcRate = () =>
  fetch("https://api.kuna.io/v3/tickers?symbols=btcuah")
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Failed to fetch BTC rate");
      }
      return res.json();
    })
    .then(([[, bid]]) => bid);

module.exports = getBtcRate;
