
const pool = require("./db");

function getAllProducts(callback) {
    const sql = "SELECT * FROM products";
    pool.query(sql, (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data);
    });
}

module.exports = {
    getAllProducts
};