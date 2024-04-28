const userModel = require("../Schemas/userSchema");
const bcrypt = require("bcrypt");

class User {
  name;
  email;
  username;
  password;

  constructor({ name, email, username, password }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  static userAlreadyExists({ email, username }) {
    return new Promise(async (resolve, reject) => {
      try {
        const userFoundInDB = await userModel.findOne({
          $or: [{ email }, { username }],
        });

        if (userFoundInDB && userFoundInDB.email === email)
          reject({
            status: 400,
            message: "Email already exists.",
          });

        if (userFoundInDB && userFoundInDB.username === username)
          reject({
            status: 400,
            message: "Username already exists.",
          });

        resolve();
      } catch (err) {
        console.error(err);
        reject({
          status: 500,
          message: `Internal server error. ${err}`,
        });
      }
    });
  }

  static findUserByLoginId(loginId) {
    return new Promise(async (resolve, reject) => {
      try {
        const userDoc = await userModel.findOne({
          $or: [
            { email: loginId },
            { username: loginId },
          ],
        }).select("+password");
        if(!userDoc) reject({
          status: 404,
          message: "User not found, please signup first",
        })
        resolve(userDoc);
      } catch (err) {
        reject({
          status: 500,
          message: `Internal server error. ${err}`,
        })
      }
    });
  }
  registerUserToDB() {
    return new Promise(async (resolve, reject) => {
      try {
        //TODO: step1> encrypting the password.
        const hashedPassword = await bcrypt.hash(
          this.password,
          parseInt(process.env.SALT)
        );

        //TODO: step2> creating user object
        const userObj = new userModel({
          name: this.name,
          email: this.email,
          username: this.username,
          password: hashedPassword,
        });

        //TODO: step3> saving user in the database
        const userDoc = await userObj.save();
        resolve({
          status: 201,
          message: "User registered successfully",
          data: userDoc,
        });
      } catch (err) {
        reject({
          status: 500,
          message: `Internal server error. err: ${err}`,
        });
      }
    });
  }
}

module.exports = User;
