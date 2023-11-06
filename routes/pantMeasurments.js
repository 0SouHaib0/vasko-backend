const express = require("express");
const router = express.Router();

const pantsController=require("../controllers/pantsMsController");

router.get('/msps-client', pantsController.getPantsMsByClientId);


module.exports = router;