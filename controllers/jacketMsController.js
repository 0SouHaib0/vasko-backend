const jacketMsModel=require("../models/jacketMsModel");

function getJacketMsByClientId(req,res){
    let clientId=req.query.client_id;
    jacketMsModel.getJacketMsByClientId(clientId,(err,data=>{
        if(err){
            console.error(err);
            return res.status(500).json({error:"Internal server error"})
            }
            return res.json(data);
            })
    )
}

function addJacketMs(req,res){
    const {clientId,poitrine, hauteur_epaules, largeur_dos, longueur_epaules, encolure, plis_sous_col, ceinture, anche, longeur_manche, rotation_manche, largeur_manche, longueur_veste, hauteur_1button, largeur_revers, nb_buttons, nb_fentes } = req.body;

    jacketMsModel.addJacketMs(clientId,poitrine, hauteur_epaules, largeur_dos, longueur_epaules, encolure, plis_sous_col, ceinture, anche, longeur_manche, rotation_manche, largeur_manche, longueur_veste, hauteur_1button, largeur_revers, nb_buttons, nb_fentes,(err,data)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "order created successfully", id: data });
    })
}

module.exports={
    getJacketMsByClientId,
    addJacketMs
};