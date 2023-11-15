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

function addPantsMs(clientId,ceinture,fourche_avant,fourche_arriere,fourche_totale,demi_hanche,demi_largeur_cuisse,demi_genou,demi_bas_pantalon,longueur_bas_nonfini, callback) {
    const sql = "INSERT INTO pantsmeasurments (ceinture,fourche_avant,fourche_arriere,fourche_totale,demi_hanche,demi_largeur_cuisse,demi_genou,demi_bas_pantalon,longueur_bas_nonfini, client_id) VALUES (?,?,?,?,?,?,?,?,?,?)";

    pool.query(sql, [ceinture,fourche_avant,fourche_arriere,fourche_totale,demi_hanche,demi_largeur_cuisse,demi_genou,demi_bas_pantalon,longueur_bas_nonfini, clientId], (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data.insertId);
    });
}

module.exports={
    getPantsMsByClientId,
    addPantsMs
};