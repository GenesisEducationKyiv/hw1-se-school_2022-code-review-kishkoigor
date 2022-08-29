const nodemailer = require('nodemailer');
const config = require('./smtp.json');

const transporter = nodemailer.createTransport(config);

const sendMail = (receiver, rate) =>
  transporter.sendMail({
    from: `"BSC Rate service" <${config.auth.user}>`,
    to: receiver,
    subject: 'BSC rate',
    text: `Maximum price to buy BTC on Kuna.io is ${rate} UAH`,
  });

module.exports = sendMail;
