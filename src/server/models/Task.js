const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({

  name: {
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

});

module.exports = Task = mongoose.model("tasks", taskSchema);
