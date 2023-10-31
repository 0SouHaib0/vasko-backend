const pool = require("./db");
const bcrypt = require("bcrypt");

function getAdministratorByEmail(email, callback) {
    const sql = "SELECT * FROM Administrators WHERE email = ?";
    pool.query(sql, [email], (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data[0]);
    });
}
    
function createAdministrator(name, email, password, callback) {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return callback(err, null);
        }

        const sql = "INSERT INTO Administrators (name, email, password) VALUES (?, ?, ?)";
        pool.query(sql, [name, email, hashedPassword], (err, data) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, data.insertId);
        });
    });
}

module.exports = {
    getAdministratorByEmail,
    createAdministrator
};
