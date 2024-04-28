const express = require("express");
require("dotenv").config();
const clc = require("cli-color");
const cors = require("cors");

//! IMPORTS :==>
const connectDB = require("./database");
const session = require("express-session");
const mongoDbSession = require("connect-mongodb-session")(session);

//! Importing Routes :==>
const homeRoutes = require("./Routes/homeRoutes");
const authRoutes = require("./Routes/authRoutes");
const todoRoutes = require("./Routes/todoRoutes");

//!  constant variables :==>
const noticeMsg = clc.magentaBright.bold;
const warnMsg = clc.yellowBright.bold;
const errMsg = clc.redBright.bold;

const app = express();
const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGO_URI;
const sessionStore = new mongoDbSession({
  uri: mongoUri,
  collection: "sessions",
});
const sessionObj = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
    httpOnly: true,
  },
};
const corsOptions = {
  origin: "http://localhost:5173",
  methodes: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,  
};

//! Database Connection :==>
connectDB();

//! Middleware :==>
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionObj));
app.use(cors(corsOptions));

//! Port config :==>
app.listen(port, () => {
  console.log(noticeMsg(`Server running on port: ${port}`));
  console.log(noticeMsg.underline(`http://localhost:${port}`));
});

//! API Routes :==>
app.use("/", homeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);