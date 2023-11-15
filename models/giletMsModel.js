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

function addGiletMs(clientId, poitrine,demi_ceinture,demi_hanche,longueur_gilet	, callback) {
    const sql = "INSERT INTO giletmeasurments ( poitrine,demi_ceinture,demi_hanche,longueur_gilet, client_id) VALUES (?,?,?,?,?)";

    pool.query(sql, [poitrine,demi_ceinture,demi_hanche,longueur_gilet, clientId], (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data.insertId);
    });
}

module.exports={
    getGiletMsByClientId,
    addGiletMs
};