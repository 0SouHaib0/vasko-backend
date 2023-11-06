
const ordersModel = require("../models/ordersModel");

function getAllOrders(req, res) {
    ordersModel.getAllOrders((err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
}

function getOrderById(req,res){
    let id= req.params.id;
    ordersModel.getOrderById(id,(err,data)=>{
        if(err){
            console.error(err);
            return res.status(500).json({error:"Internal server Error"});
        }
        return res.json(data);
    });
}

function getOrderByClientById(req,res){
    let clientId= req.query.client_id;
    ordersModel.getOrderByClientId(clientId,(err,data)=>{
        if(err){
            console.error(err);
            return  res.json(data);
        }
        return res.json(data);
    })
}

function getNumberOrdersByCLients(req,res){
    let clientId= req.query.client_id;
    ordersModel.getNumberOrdersByCLients(clientId,(err,data)=>{
        if(err){
            console.error(err);
            return res.status(500).json({error:"Internal server error"})
            }
            return res.json(data);
            })
}

function addNewOrder(req,res){
    const {clientId,qtVeste,qtGilet,qtPants } = req.body;

    ordersModel.addNewOrder(clientId,qtVeste,qtGilet,qtPants,(err,data)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "order created successfully", id: data });
    })
}

module.exports = {
    getAllOrders,
    getOrderByClientById,
    getOrderById,
    getNumberOrdersByCLients,
    addNewOrder
    
};
