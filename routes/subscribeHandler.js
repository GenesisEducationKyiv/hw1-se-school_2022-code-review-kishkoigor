const parseReqBody = require("../utils/parseReqBody");
const validateEmail = require("../utils/validateEmail");
const db = require("../db/index");

const invalidBodyHandler = (res) => {
  res.writeHead(400);
  res.write("invalid email");
  res.end();
};

const alreadySavedHandler = (res) => {
  res.writeHead(409);
  res.write("already saved");
  res.end();
};

const saveEmailHandler = (res, email) => {
  try {
    db.appendToList(email);
    res.writeHead(200);
    res.end();
  } catch (err) {
    res.writeHead(500);
    res.end();
  }
};

const subscribeHandler = async (req, res) => {
  const email = await parseReqBody(req);

  if (!validateEmail(email)) return invalidBodyHandler(res);
  if (db.checkIfSaved(email)) return alreadySavedHandler(res);
  return saveEmailHandler(res, email);
};

module.exports = subscribeHandler;
