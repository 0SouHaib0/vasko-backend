const express = require("express");
const router = express.Router();

const jacketMsController=require("../controllers/jacketMsController");

router.get('/jacketMs-client', jacketMsController.getJacketMsByClientId);
router.post("/addJacketMs",jacketMsController.addJacketMs );

module.exports = router;