// import from user controller
const { dashboardController } = require("../controllers/dashboardController");
const express = require("express");
const router = express.Router();

router.get("/index", dashboardController.index);
router.put("/update", dashboardController.update);

module.exports = router;
