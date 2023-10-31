const ProductsModel=require("../models/productsModel");

function getAllProducts(req, res) {
    ProductsModel.getAllProducts((err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
}

module.exports = {
    getAllProducts
};