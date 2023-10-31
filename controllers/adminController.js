const administratorModel = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

function getAdministratorByEmail(req, res) {
    const { email } = req.params;

    administratorModel.getAdministratorByEmail(email, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
}

function createAdministrator(req, res) {
    const { name, email, password } = req.body;

    administratorModel.createAdministrator(name, email, password, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "Administrator created successfully", id: data });
    });
}




function login(req, res) {
    const { email, password } = req.body;

    administratorModel.getAdministratorByEmail(email, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Check the hashed password against the provided password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            if (isMatch) {
                // Passwords match, generate a token
                const payload = { userId: user.id };
                jwt.sign(payload, secretKey, { expiresIn: '1h' }, (tokenErr, token) => {
                    if (tokenErr) {
                        console.error(tokenErr);
                        return res.status(500).json({ error: "Token generation error" });
                    }

                    // Send the token as a response
                    res.json({ token });
                });
            } else {
                return res.status(401).json({ error: "Invalid credentials" });
            }
        });
    });
}

module.exports = {
    getAdministratorByEmail,
    createAdministrator,
    login
};


