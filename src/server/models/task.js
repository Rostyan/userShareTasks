const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const task = new Schema({

  ovner: {
    type: String,
    required: [true, "Can't be an empty field"],
    lowercase: true,
    trim: true,
  },
  field: {
    type: String,
    required: [true, "Can't be an empty field"],
    trim: true,
    maxlength: [150,"field is too long"]
  }

},{collection: 'task'});

module.exports = mongoose.model('task',task);