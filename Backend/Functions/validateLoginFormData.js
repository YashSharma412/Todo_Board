async function validateLoginFormData({ loginId, password }) {
  return new Promise((resolve, reject) => {
    if (!loginId) reject("loginId is missing");
    if (!password) reject("password is missing");
    if (typeof loginId !== "string")
      reject("loginId has invalid type, Try again with text input");
    if (typeof password !== "string")
      reject("password has invalid type, Try again with text input");
    resolve();
  });
}

module.exports = validateLoginFormData;
