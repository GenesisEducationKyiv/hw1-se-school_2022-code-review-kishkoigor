require("dotenv").config({ path: "./.env.test" });
const fs = require("fs");

const { DB_FILE_NAME } = process.env;
const emailAddressMock = "test@email.mock";

const mockData = JSON.stringify([emailAddressMock]);
fs.writeFileSync(`./db/${DB_FILE_NAME}`, mockData);

const db = require("./index");

test("db.getList reading list from file", () => {
  const list = db.getList();
  expect(list).toContain(emailAddressMock);
});

describe("db.appendToList", () => {
  const anotherEmailAddressMock = "jonny.depp@celeb.com";
  db.appendToList(anotherEmailAddressMock);

  test("appending email to store", () => {
    const list = db.getList();
    expect(list).toContain(anotherEmailAddressMock);
  });

  test("appending email to file", async () => {
    const dbFileContent = await fs.promises.readFile(`./db/${DB_FILE_NAME}`, {
      encoding: "utf8",
      flag: "r",
    });
    expect(JSON.parse(dbFileContent)).toContain(anotherEmailAddressMock);
  });
});

describe("db.checkIfExist", () => {
  test("return true for existing email", () => {
    const isEmailExist = db.checkIfSaved(emailAddressMock);
    expect(isEmailExist).toBe(true);
  });

  test("return false for non-existing email", () => {
    const isEmailExist = db.checkIfSaved("");
    expect(isEmailExist).toBe(false);
  });
});

afterAll(async () => {
  await fs.promises.unlink(`./db/${DB_FILE_NAME}`);
});
