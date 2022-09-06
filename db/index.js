const fs = require("fs");

const { DB_FILE_NAME } = process.env;
const dbFile = fs.readFileSync(`./db/${DB_FILE_NAME}`, {
  encoding: "utf8",
  flag: "r",
});
const store = JSON.parse(dbFile);

const getList = () => store;

const appendToList = (email) => {
  store.push(email);
  fs.writeFile(`./db/${DB_FILE_NAME}`, JSON.stringify(store), (err) => {
    if (err) throw new Error("email wasn't saved");
  });
};

const checkIfSaved = (email) => store.includes(email);

const db = {
  getList,
  appendToList,
  checkIfSaved,
};

module.exports = db;
