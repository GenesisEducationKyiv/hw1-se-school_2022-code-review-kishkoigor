const validateEmail = require("../validateEmail");

test('[unit] "email@mail.com" email address is valid', () => {
  expect(validateEmail("email@mail.com")).toBeTruthy();
});

test('[unit] "emailatmail.com" email address to be invalid', () => {
  expect(validateEmail("emailatmail.com")).toBeFalsy();
});
