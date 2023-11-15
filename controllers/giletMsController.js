const giletMsModel=require("../models/giletMsModel");

function getGiletMsByClientId(req,res){
    let clientId = req.query.client_id;
    giletMsModel.getGiletMsByClientId(clientId,(err,data=>{
        if(err){
            console.error(err);
            return res.status(500).json({error:"Internal server error"})
            }
            return res.json(data);
            })
    )
}

function addGiletMs(req,res){
    const {clientId,poitrine,demi_ceinture,demi_hanche,longueur_gilet } = req.body;

    giletMsModel.addGiletMs(clientId,poitrine,demi_ceinture,demi_hanche,longueur_gilet,(err,data)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "gilet ms created successfully", id: data });
    })
}


module.exports={
    getGiletMsByClientId,
    addGiletMs
};