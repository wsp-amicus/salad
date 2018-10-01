const Product = require('../models/product')
const fs = require('fs');
const moment = require('moment')

const productController = {
    index(req,res) {
        Product.find({}, (err, products) => {
            if(err) {
                res.status(500).send('Error on query.')
            }
            res.send(products)
        })
    },
    create(req,res) {
        let name = req.body.name
        let price = parseInt(req.body.price,10)
        let type = req.body.type
        let imageUrl = req.files
        if(imageUrl) {
            imageUrl = productController.upload(imageUrl)
        }

        let product = new Product({
            name,
            imageUrl,
            type,
            price
        })

        product.save()
        res.status(200).send('success')
    },
    upload(files) {
        var keys = Object.keys(files);

        const dir = 'storage/image'
        if (!fs.existsSync('storage')) {
            fs.mkdirSync('storage');
        }

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        let pathUrl = []

        keys.forEach((key) => {
            const filename = (dir + '/' +  moment().format('MMMM-Do-YYYY-h:mm:ss[-]') + files[key].name).trim()
            fs.writeFile(filename, files[key].data, (err) => {
                if (err) throw err;
                console.log(files[key].name + ' has been saved!');
            })
            pathUrl.push(filename)
        })

        return pathUrl
    }
}

module.exports = {
    productController
}