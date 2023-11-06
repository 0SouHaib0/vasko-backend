const pool =require("./db");

function getPantsMsByClientId(clientId,callback){
    const sql="SELECT * from pantsmeasurments where client_id=?";
    pool.query(sql,[clientId],(err,data=>{
        if(err){
            console.error("ERROR IN GETTING pants measurments ",err);
            return(callback,null);
        }
        if(data.lenght===0){
            return callback("no measurment for this client yet");
        }
        return callback(null,data);
    }))
}

module.exports={
    getPantsMsByClientId
};