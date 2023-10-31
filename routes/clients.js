const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");

router.get("/", clientsController.getAllClients);
router.post("/addClient", clientsController.addClient);


module.exports = router;