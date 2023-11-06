const pool = require("./db");

function getJacketMsByClientId(clientId,callback){
    const sql="SELECT * FROM jacketmeasurements where client_id =?";
    pool.query(sql, [clientId], (err, data)=>{
        if(err){
            console.error("Error in get jacket measurments by client id",err);
            return callback(err,null);
        }
        if(data.length === 0){
            return callback("No measurment Found for this Client Id",null);
        }
        return callback(null,data);
    });
}

module.exports={
     getJacketMsByClientId
};