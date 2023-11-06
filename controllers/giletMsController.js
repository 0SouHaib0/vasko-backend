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

module.exports={
    getGiletMsByClientId,
};