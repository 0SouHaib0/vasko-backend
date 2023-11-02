const pool = require("./db");

function getAllClients(callback) {
    const sql = "SELECT * FROM Clients";
    pool.query(sql, (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data);
    });
}

function addClient(name,email,phone,callback){
    const sql ="INSERT INTO CLIENTS (name,email, phone) values (?,?,?)";
    pool.query(sql,[name,email,phone],(err,data)=>{
        if (err) {
            return callback(err, null);
        }
        return callback(null, data.insertId);
    })
       
}
function getClientById(clientId,callback){
    const sql="SELECT * From CLIENTS WHERE id = ?";
    pool.query(sql,[clientId],(err,data)=>{
        if(err){
            return callback(err,null);
        } if (data.length === 0) {
            return callback("client not found", null);
        }
        return callback(null,data[0]);
    })
}

module.exports = {
    getAllClients,
    addClient,
    getClientById
};