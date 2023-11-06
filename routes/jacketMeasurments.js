const express = require("express");
const router = express.Router();

const jacketMsController=require("../controllers/jacketMsController");

router.get('/msjt-client', jacketMsController.getJacketMsByClientId);

module.exports = router;