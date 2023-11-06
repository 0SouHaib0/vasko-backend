const pool =require("./db");

function getGiletMsByClientId(clientId,callback){
    const sql="SELECT * FROM giletmeasurments where client_id =?"
    pool.query(sql,[clientId], (err,result)=>{
        if(err){
            console.error("erro in getting gilet measuments",err);
            return callback(err,null);
        }
        if(data===0){
            return callback("No measurments for this clentt yet",null);
        }
        return callback(null,data);
    });
}

module.exports={
    getGiletMsByClientId
};