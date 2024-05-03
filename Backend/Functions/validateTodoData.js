async function validateTodoData({ title, description }) {
  return new Promise((resolve, reject) => {
    if (!title) reject("title is missing");
    // if (!description) reject("description is missing");
    if (typeof title !== "string")
      reject("title has invalid type, Try again with text input");
    if (title.length > 40)
      reject("Todo Title length must be less than 40 characters");
    if (typeof description !== "string")
      reject("description has invalid type, Try again with text input");
    resolve();
  });
}

module.exports = validateTodoData;
