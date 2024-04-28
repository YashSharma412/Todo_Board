const mongoose = require("mongoose");
const clc = require("cli-color");
const mongoUri = process.env.MONGO_URI;
const errMsg = clc.redBright.bold;
const warnMsg = clc.yellowBright.bold;
const noticeMsg = clc.magentaBright.bold;
function connectDB() {
    mongoose
        .connect(mongoUri, {
            autoIndex: true, //make this also true
        })
        .then(() => {
            console.log(noticeMsg("~~~~ Connection to MongoDb secured !~~~~"));
        })
        .catch((err) => console.error("Failed to connect to MongoDB: " + err));
}

module.exports = connectDB;