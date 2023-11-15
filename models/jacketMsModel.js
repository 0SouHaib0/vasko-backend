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

function addJacketMs(clientId, poitrine, hauteur_epaules, largeur_dos, longueur_epaules, encolure, plis_sous_col, ceinture, anche, longeur_manche, rotation_manche, largeur_manche, longueur_veste, hauteur_1button, largeur_revers, nb_buttons, nb_fentes, callback) {
    const sql = "INSERT INTO jacketmeasurements (poitrine, hauteur_epaules, largeur_dos, longueur_epaules, encolure, plis_sous_col, ceinture, anche, longeur_manche, rotation_manche, largeur_manche, longueur_veste, hauteur_1button, largeur_revers, nb_buttons, nb_fentes, client_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    pool.query(sql, [poitrine, hauteur_epaules, largeur_dos, longueur_epaules, encolure, plis_sous_col, ceinture, anche, longeur_manche, rotation_manche, largeur_manche, longueur_veste, hauteur_1button, largeur_revers, nb_buttons, nb_fentes, clientId], (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data.insertId);
    });
}


module.exports={
     getJacketMsByClientId,
     addJacketMs
};