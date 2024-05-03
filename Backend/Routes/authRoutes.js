const express = require("express");
const authRoutes = express.Router();
const isAuthorized = require("../Middlewares/isAuthorized");
const {
  signUp,
  logIn,
  logOut,
  logOutOfAllDevices,
  fetchUser,
} = require("../Controllers/authController");
const notAlreadyLoggedIn = require("../Middlewares/notAlreadyLoggedIn");

authRoutes.post("/signup", notAlreadyLoggedIn, signUp);
authRoutes.post("/login", notAlreadyLoggedIn, logIn);
authRoutes.get("/logout", isAuthorized, logOut);
authRoutes.get("/logOutOfAllDevices", isAuthorized, logOutOfAllDevices);
authRoutes.get("/fetchUser", isAuthorized, fetchUser);

module.exports = authRoutes;
