const express = require("express");
const router = express.Router();
const administratorController = require("../controllers/adminController");

router.post("/login", administratorController.login);
router.post("/signup", administratorController.createAdministrator);

module.exports = router;