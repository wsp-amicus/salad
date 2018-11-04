const Product = require("../models/product");
const fs = require("fs");
const moment = require("moment");

const productController = {
  index(req, res) {
    Product.find({}, (err, products) => {
      if (err) {
        res.status(500).send("Error on query.");
      }
      if (!products) res.status(404).send("Not found");
      res.status(200).send(products);
    });
  },
  create(req, res) {
    let name = req.body.name;
    let price = parseInt(req.body.price, 10);
    let ingredients = JSON.parse(req.body.ingredients);
    let description = req.body.description;
    let imageUrl = req.files;
    if (imageUrl) {
      imageUrl = productController.upload(imageUrl);
    }

    let product = new Product({
      name,
      imageUrl,
      ingredients,
      price,
      description
    });


    product.save();
    res.status(200).send("success");
  },
  upload(files) {
    var keys = Object.keys(files);

    var dir = "storage/image";
    if (!fs.existsSync("storage")) {
      fs.mkdirSync("storage");
    }

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    let pathUrl = [];

    keys.forEach(key => {
      var filename =
        dir +
        "/" +
        moment().format("MMMM-Do-YYYY-h:mm:ss[-]") +
        files[key].name;
      fs.writeFile(filename, files[key].data, err => {
        if (err) throw err;
        console.log(filename + " has been saved!");
      });
      pathUrl.push(filename);
    });
    return pathUrl;
  },
  delete(req, res) {
    // TODO delete image storage
    Product.deleteOne(req.query, err => {
      if (err) throw err;
      res.status(200).send("done");
    });
  },
  find(req, res) {
    Product.findOne(req.query, (err, product) => {
      if (err) {
        res.status(500).send("Error on query.");
      }
      if (!product) {
        res.status(404).send("Product is not found");
      }
      res.status(200).send(product);
    });
  },
  edit(req, res) {
    let name = req.body.name;
    let price = parseInt(req.body.price, 10);
    let ingredients = req.body.ingredients;
    let description = req.body.description;
    let imageUrl = req.files;
    let oldImages = req.body.oldPictures;
    if (imageUrl) {
      imageUrl = productController.upload(imageUrl);
      imageUrl = [...imageUrl, oldImages];
    } else {
      imageUrl = oldImages;
    }


    Product.findOne({ _id: req.body._id }, (err, product) => {
      if (err) throw err;
      product.name = name;
      product.price = price;
      product.ingredients = ingredients;
      product.imageUrl = imageUrl;
      product.description = description;
      product.save();
    });

    res.status(200).send("success");
  }
};

module.exports = {
  productController
};
