const getBtcRate = require('../api');

const rateHandler = async (req, res) =>
  getBtcRate()
    .then(data => {
      const [[, bid]] = data;
      res.writeHead(200);
      res.write(bid.toString());
      res.end();
    })
    .catch(() => {
      res.writeHead(500);
      res.end();
    });

module.exports = rateHandler;
