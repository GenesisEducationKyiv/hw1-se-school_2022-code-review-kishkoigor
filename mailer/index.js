const nodemailer = require("nodemailer");
const config = require("./smtp.json");

const transporter = nodemailer.createTransport(config);

const sendMail = (receiver, rate) =>
  transporter.sendMail({
    from: `"BTC Rate service" <${config.auth.user}>`,
    to: receiver,
    subject: "BTC rate",
    text: `Maximum price to buy BTC on Kuna.io is ${rate} UAH`,
  });

module.exports = sendMail;
