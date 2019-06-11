const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const task = new Schema({

  email: {
    type: String,
    required: [true, "email can't be an empty field"],
    lowercase: true,
    trim: true,
    unique : [true, "email is already used in system!"]
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password is too short!"],
    maxlength: [50, "password is too long!"]
  },
  name: {
    type: String,
    required: [true, "email can't be an empty field"],
    trim: true,
    maxlength: [50,"name is too long"]
  }

},{collection: "task"});

module.exports = mongoose.model("task",task);