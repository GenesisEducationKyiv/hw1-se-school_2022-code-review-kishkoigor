const getBtcRate = require("../api");

const rateHandler = async (req, res) =>
  getBtcRate()
    .then((data) => {
      res.writeHead(200);
      res.write(data.toString());
      res.end();
    })
    .catch(() => {
      res.writeHead(500);
      res.end();
    });

module.exports = rateHandler;
