const Ingredient = require("../models/ingredient");
const fs = require("fs");
const moment = require("moment");

const ingredientController = {
  index(req, res) {
    Ingredient.find({}, (err, ingredients) => {
      if (err) {
        res.status(500).send("Error on query.");
      }
      if (!ingredients) res.status(404).send("Not found");
      res.status(200).send(ingredients);
    });
  },
  create(req, res) {
    let name = req.body.name;
    let price = parseInt(req.body.price, 10);
    let type = req.body.type;
    let description = req.body.description;
    let imageUrl = req.files;
    if (imageUrl) {
      imageUrl = ingredientController.upload(imageUrl);
    } else {
      imageUrl = req.body.imageUrl;
    }

    let ingredient = new Ingredient({
      name,
      imageUrl,
      type,
      price,
      description
    });

    ingredient.save();
    res.status(200).send("success");
  },
  createMany(req, res) {
    try {
      const { body } = req
      const result = Ingredient.insertMany(body)
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send('Validation error, body must be the stringified array of objects')
    }
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
        moment().format("MMMM-Do-YYYY-hmmss[-]") +
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
    Ingredient.deleteMany(req.query, err => {
      if (err) throw err;
      res.status(200).send("done");
    });
  },
  find(req, res) {
    Ingredient.findOne(req.query, (err, ingredient) => {
      if (err) {
        res.status(500).send("Error on query.");
      }
      if (!ingredient) {
        res.status(404).send("Ingredient is not found");
      }
      res.status(200).send(ingredient);
    });
  },
  edit(req, res) {
    let name = req.body.name;
    let price = parseInt(req.body.price, 10);
    let type = req.body.type;
    let description = req.body.description;
    let imageUrl = req.files;
    let oldImages = req.body.oldPictures;
    if (imageUrl) {
      imageUrl = ingredientController.upload(imageUrl);
      imageUrl = [...imageUrl, oldImages];
    } else {
      imageUrl = oldImages;
    }

    Ingredient.findOne({ _id: req.body._id }, (err, ingredient) => {
      if (err) throw err;
      ingredient.name = name;
      ingredient.price = price;
      ingredient.type = type;
      ingredient.imageUrl = imageUrl;
      ingredient.description = description;
      ingredient.save();
    });

    res.status(200).send("success");
  }
};

module.exports = {
  ingredientController
};
