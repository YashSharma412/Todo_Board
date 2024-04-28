const express = require("express");
const authRoutes = express.Router();
const isAuthorized = require("../Middlewares/isAuthorized");
const {
  signUp,
  logIn,
  logOut,
  logOutOfAllDevices,
} = require("../Controllers/authController");
const notAlreadyLoggedIn = require("../Middlewares/notAlreadyLoggedIn");


authRoutes.post("/signup", notAlreadyLoggedIn, signUp);
authRoutes.post("/login", notAlreadyLoggedIn, logIn);
authRoutes.get("/logout", isAuthorized, logOut);
authRoutes.get("/logOutOfAllDevices", isAuthorized, logOutOfAllDevices);

module.exports = authRoutes;
