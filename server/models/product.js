const mongoose = require("mongoose");

const product = mongoose.Schema({
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
  ingredients: {
    type: [],
    require: true
  },
  price: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("product", product);
