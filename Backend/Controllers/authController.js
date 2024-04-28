const bcrypt = require("bcrypt");
// helper function
const User = require("../Models/User");
const validateSignUpData = require("../Functions/validateSignUpData");
const validateLoginFormData = require("../Functions/validateLoginFormData");
const sessionModel = require("../Schemas/sessionSchema");
// constants
const signUp = async (req, res) => {
  const { name, email, username, password } = req.body;
  //TODO: Step1> validating data:
  try {
    await validateSignUpData(req.body);
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      status: 422,
      message: "Failed to validate sign up data",
      err: err,
    });
  }

  //TODO: Step2> check wether loginId is already used in database:
  try {
    await User.userAlreadyExists({ email, username });

    //TODO: Step3> Registering user to database
    const newUser = new User({ name, email, username, password });
    const responseUser = await newUser.registerUserToDB();

    return res.status(200).json({
      message: responseUser.message,
      status: responseUser.status,
      data: responseUser.data,
    });
  } catch (err) {
    return res.status(err.status).json(err);
  }
};

const logIn = async (req, res) => {
  const { loginId, password } = req.body;
  //TODO: Step1> validating data:
  try {
    await validateLoginFormData(req.body);
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      status: 422,
      message: err,
    });
  }

  try {
    //TODO: Step2> find user in database using loginId (which could either be email or username)
    const user = await User.findUserByLoginId(loginId);
    //TODO: Step3> check password is correct or not (matching with password of user in database)
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches)
      return res.status(400).json({
        status: 400,
        message: "Incorrect password, please check again ",
      });

    //TODO: Step4> logIn user i.e., create session document in database
    req.session.isAuth = true;
    req.session.user = {
      userId: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    };

    return res.status(200).json({
      status: 200,
      message: "Login successfull",
      data: req.session.user,
    });
  } catch (err) {
    console.error(err);
    return res.status(err.status).json({
      status: err.status,
      message: `${err.message}`,
    });
  }
  // return res.send("logIn user");
};

const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: `Internal server error.${err.message}`,
      });
    }
  });

  return res.status(200).json({
    status: 200,
    message: "Logged out successfully",
  });
};

const logOutOfAllDevices = async (req, res) => {
  // TODO: Step1> getting username , to be used as a key
  console.log(req.session)
  const username = req.session.user.username;
  try {
    // TODO: Step2> selecting all sessions with the key username
    const deletedDocs = await sessionModel.deleteMany({
      "session.user.username": username,
    });
    return res.status(200).json({
      status: 200,
      message: `${deletedDocs.deletedCount} sessions deleted successfully`,
      data: deletedDocs,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: `Internal server error. ${err}`,
    });
  }
};

module.exports = { signUp, logIn, logOut, logOutOfAllDevices };
