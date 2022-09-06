const validateEmail = require("../validateEmail");

test('"email@mail.com" email address is valid', () => {
  expect(validateEmail("email@mail.com")).toBeTruthy();
});

test('"emailatmail.com" email address to be invalid', () => {
  expect(validateEmail("emailatmail.com")).toBeFalsy();
});
