const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema(
  {
    _id: String,
  },
  {
    timestamps: true,
    strict: false,
  }
);

const sessionModel = mongoose.model("session", sessionSchema);
module.exports = sessionModel;
