const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({

  name: {
    type: String,
    required: [true, "Can't be an empty field"],
  },
  field: {
    type: String,
    required: [true, "Can't be an empty field"]
  }

});

module.exports = Task = mongoose.model("tasks", taskSchema);
