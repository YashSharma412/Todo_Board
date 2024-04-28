const regexEmail = require("./regexEmail");

async function validateSignUpData({ name, email, username, password }) {
  return new Promise((resolve, reject) => {
    if (!username) reject("username is missing");
    if (!email) reject("email is missing");
    if (!password) reject("password is missing");

    if (typeof username !== "string")
      reject("username has invalid type, Try again with text input");
    if (typeof email !== "string")
      reject("email has invalid type, Try again with text input");
    if (typeof password !== "string")
      reject("password has invalid type, Try again with text input");

    if (username.length < 5 || username.length > 50)
      reject("username length must be between 5 and 50 characters");
    if (email.length < 5 || email.length > 50)
      reject("email length must be between 5 and 50 characters");
    if (password.length < 8 || password.length > 50)
      reject("password length must be between 8 and 50 characters");

    if (!regexEmail(email))
      reject("email address is of invalid format, please check and try again");
    resolve();
  });
}

module.exports = validateSignUpData;
