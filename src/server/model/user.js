const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const users = new Schema({

  firstName: {
    type: String,
    required: [true, "email can't be an empty field"],
    trim: true,
    maxlength: [50,"name is too long"]
  },
  lastName: {
    type: String,
    required: [true, "email can't be an empty field"],
    trim: true,
    maxlength: [50,"name is too long"]
  },
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
  confirmPassword: {
    type: String,
    required: true,
    minlength: [6, "password is too short!"],
    maxlength: [50, "password is too long!"]
  },

},{collection: "user"});

module.exports = User = mongoose.model("users",users);