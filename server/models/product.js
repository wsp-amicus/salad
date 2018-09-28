const mongoose = require('mongoose')

const product = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String
    },
    type: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('product', product)