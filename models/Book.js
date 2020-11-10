const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Author: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  ISBN: {
    type: Number,
    unique: true,
    required: true,
    min: 1000000000,
    max: 9999999999999,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value"
    }
  },

});

module.exports = mongoose.model("Book", bookSchema);