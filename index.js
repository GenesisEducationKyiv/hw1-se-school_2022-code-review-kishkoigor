const http = require("http");
const rateHandler = require("./routes/rateHandler");
const subscribeHandler = require("./routes/subscribeHandler");
const sendEmailsHandler = require("./routes/sendEmailsHandler");
const notFound = require("./routes/notFound");

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

  notFound(res);
};

http.createServer(routing).listen(8000);
