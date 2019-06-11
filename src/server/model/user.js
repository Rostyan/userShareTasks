const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({

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

},{collection: "user"});

user.path("email").validate((value) =>{
  value = value.trim();
  return value.match(/\S+@\S+\.\S+/);
}, "Incorrect email address");

user.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

module.exports = mongoose.model("user",user);