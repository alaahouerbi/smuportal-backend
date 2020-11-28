const mongoose = require("mongoose");

const TagsSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  id: {
    type: Number,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },

});

module.exports = mongoose.model("Tags", tagsSchema);