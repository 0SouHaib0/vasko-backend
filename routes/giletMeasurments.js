const express = require("express");
const router = express.Router();

const giletMsController=require("../controllers/giletMsController");

router.get('/msgl-client', giletMsController.getGiletMsByClientId);



module.exports = router;