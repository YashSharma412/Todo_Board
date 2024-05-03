const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    minLength: 2,
    maxLength: 40,
    required: true,
  },
  description: {
    type: String,
    maxLength: 500,
  },
  username: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
},{
  timestamps: true,
});

const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;
