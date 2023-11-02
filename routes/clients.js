const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");

router.get("/", clientsController.getAllClients);
router.post("/addClient", clientsController.addClient);
router.get('/:id', clientsController.getClientById);


module.exports = router;