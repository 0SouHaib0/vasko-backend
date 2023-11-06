 const pantsMsModel=require("../models/pantsMsModel");

 function getPantsMsByClientId(req,res){
    let clientId=req.query.client_id;
    pantsMsModel.getPantsMsByClientId(clientId,(err,data)=>{
        if(err){
            console.error(err);
            return res.status(500).json({error:"Internal server error"})
            }
            return res.json(data);
            })
 }
 module.exports={
    getPantsMsByClientId,
 };