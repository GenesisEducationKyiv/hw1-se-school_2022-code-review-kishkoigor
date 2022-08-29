const fs = require('fs');
const store = require('./store.json');

const getList = () => store;

const appendToList = email => {
  store.push(email);
  console.log(store);
  fs.writeFile('./db/store.json', JSON.stringify(store), err => {
    if (err) throw new Error("email wasn't saved");
  });
};

const checkIfSaved = email => store.includes(email);

const db = {
  getList,
  appendToList,
  checkIfSaved,
};

module.exports = db;
