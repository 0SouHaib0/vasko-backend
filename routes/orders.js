const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.getAllOrders);
app.get('/number-by-client', ordersController.getNumberOrdersByCLients);
app.get('/by-client', ordersController.getOrderByClientById);
app.get('/:id', ordersController.getOrderById);


module.exports = router;