const db = require("../db");
const sendMail = require("../mailer");
const getBtcRate = require("../api");

const sendEmailsHandler = async (req, res) => {
  const rate = getBtcRate();
  const list = db.getList();

  const results = await Promise.allSettled(
    list.map((email) => sendMail(email, rate))
  );
  const rejects = results.filter((promise) => promise.status === "rejected");

  if (rejects.length) {
    res.writeHead(500);
    res.write(JSON.stringify(rejects));
    res.end();
    return;
  }

  res.writeHead(200);
  res.end();
};

module.exports = sendEmailsHandler;
