const http = require("http");
require("dotenv").config();

const rateHandler = require("./routes/rateHandler");
const subscribeHandler = require("./routes/subscribeHandler");
const sendEmailsHandler = require("./routes/sendEmailsHandler");
const notFoundHandler = require("./routes/notFoundHandler");

const routing = async (req, res) => {
  const { url, method } = req;

  if (url === "/api/rate" && method === "GET") {
    await rateHandler(req, res);
    return;
  }

  if (url === "/api/subscribe" && method === "POST") {
    await subscribeHandler(req, res);
    return;
  }

  if (url === "/api/sendEmails" && method === "POST") {
    await sendEmailsHandler(req, res);
    return;
  }

  notFoundHandler(req, res);
};

http.createServer(routing).listen(8000);
