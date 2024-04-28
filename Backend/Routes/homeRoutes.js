const express = require("express");
const  homeRoutes = express.Router();
const { serverOnlineTest } = require("../Controllers/homeController");

homeRoutes.get("/", serverOnlineTest);

module.exports = homeRoutes;