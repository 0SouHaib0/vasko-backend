const express = require("express");
const router = express.Router();

const giletMsController=require("../controllers/giletMsController");

router.get('/giletMs-client', giletMsController.getGiletMsByClientId);
router.post("/addGiletMs",giletMsController.addGiletMs );


module.exports = router;