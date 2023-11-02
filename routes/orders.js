const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.getAllOrders);
router.get('/number-by-client', ordersController.getNumberOrdersByCLients);
router.get('/by-client', ordersController.getOrderByClientById);
router.get('/:id', ordersController.getOrderById);


module.exports = router;