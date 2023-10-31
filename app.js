const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const clientsRouter = require("./routes/clients");
const ordersRouter = require("./routes/orders");
const productsRouter = require("./routes/products");
const administratorRouter = require("./routes/admin"); // Import your router

app.use("/clients", clientsRouter);
app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/", administratorRouter); // Use the router at the root path

const port = process.env.PORT || 8081;
const host = process.env.DB_HOST;
const secretKey = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');

// Sign a JWT token
const payload = { userId: 123 };
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
// ...

// Verify a JWT token
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error('Token verification failed');
    } else {
        console.log('Token verification succeeded', decoded);
    }
});

app.listen(port, host, () => {
    console.log("Server is running on port " + port);
});