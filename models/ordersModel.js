const pool = require("../models/db");

function getAllOrders(callback) {
    const sql = "SELECT * FROM orders";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error("Error in getAllOrders:", err);
            return callback(err, null);
        }
        return callback(null, data);
    });
}
// get order by it id
function getOrderById(orderId,callback) {
    const sql = "SELECT * FROM orders where id = ?";
    pool.query(sql,[id], (err, data) => {
        if (err) {
            console.error("Error in getorderBy id:", err);
            return callback(err, null);
        }
        if (data.length === 0) {
            return callback("Order not found", null);
        }    
        return callback(null, data[0]); // Assuming there's only one order with the given ID
    });
}

//get order by client 
function getOrderByClientId(clientId,callback){
    const sql="SELECT * FROM orders where client_id =?";
    pool.query(sql, [clientId], (err, data)=>{
        if(err){
            console.error("Error in getorder by client id",err);
            return callback(err,null);
        }
        if(data.length === 0){
            return callback("No Orders Found for this Client Id",null);
        }
        return callback(null,data);
    });
}
///
function addNewOrder(clientId,productId,callback){
    const sql ="INSERT INTO orders (client_id,product_id,order_date) values (?,?,?)";
    const currentDate= new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    pool.query(sql,[clientId,productId,formattedDate],(err,data)=>{
        if (err) {
            return callback(err, null);
        }
        return callback(null, data.insertId);
    })
       
}


module.exports = {
    getAllOrders,
    addNewOrder,
    getOrderById,
    getOrderByClientId
};

console.log("In ordersModel.js");
