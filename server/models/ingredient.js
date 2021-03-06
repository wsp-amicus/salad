const mongoose = require("mongoose");

const ingredient = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: []
  },
  type: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("ingredient", ingredient);
