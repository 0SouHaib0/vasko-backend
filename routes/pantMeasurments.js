const express = require("express");
const router = express.Router();

const pantsController=require("../controllers/pantsMsController");

router.get('/pantsMs-client', pantsController.getPantsMsByClientId);
router.post("/addPantsMs",pantsController.addPantsMs );


module.exports = router;