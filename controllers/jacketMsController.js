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

module.exports={
    getJacketMsByClientId,
};