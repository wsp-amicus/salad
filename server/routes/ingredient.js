// import from user controller
const { ingredientController } = require("../controllers/ingredientController")
const express = require("express")
const router = express.Router()

router.get("/", ingredientController.index)
router.post("/create", ingredientController.create)
router.post("/createMany", ingredientController.createMany)
router.delete("/delete", ingredientController.delete)
router.get("/find", ingredientController.find)
router.put("/edit", ingredientController.edit)

module.exports = router
