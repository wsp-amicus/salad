const Product = require('../models/product')

const productController = {
    index(req,res) {
        Product.find({}, (err, products) => {
            if(err) {
                res.status(500).send('Error on query.')
            }
            res.send(products)
        })
    }
}

module.exports = {
    productController
}