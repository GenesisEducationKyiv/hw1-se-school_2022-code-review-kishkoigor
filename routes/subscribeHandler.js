const parseReqBody = require('../utils/parseReqBody');
const validateEmail = require('../utils/validateEmail');
const db = require('../db/index');

const subscribeHandler = async (req, res) => {
  const email = await parseReqBody(req);

  if (!validateEmail(email)) return handleInvalidBody(res);
  if (db.checkIfSaved(email)) return handleAlreadySaved(res);

  try {
    db.appendToList(email);
    res.writeHead(200);
    res.end();
  } catch (err) {
    res.writeHead(500);
    res.end();
  }
};

const handleInvalidBody = res => {
  res.writeHead(400);
  res.write('invalid email');
  res.end();
};

const handleAlreadySaved = res => {
  res.writeHead(409);
  res.write('already saved');
  res.end();
};

module.exports = subscribeHandler;
