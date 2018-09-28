const Product = require('../models/product')

const productController = {
    index(req,res) {
        res.send('hello product')
    }
}

module.exports = {
    productController
}