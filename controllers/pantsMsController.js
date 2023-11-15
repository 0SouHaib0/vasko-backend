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

 function addPantsMs(req,res){
   const {clientId,ceinture,fourche_avant,fourche_arriere,fourche_totale,demi_hanche,demi_largeur_cuisse,demi_genou,demi_bas_pantalon,longueur_bas_nonfini } = req.body;

   pantsMsModel.addPantsMs(clientId,ceinture,fourche_avant,fourche_arriere,fourche_totale,demi_hanche,demi_largeur_cuisse,demi_genou,demi_bas_pantalon,longueur_bas_nonfini,(err,data)=>{
       if (err) {
           console.error(err);
           return res.status(500).json({ error: "Internal Server Error" });
       }
       return res.json({ message: "order created successfully", id: data });
   })
}

 module.exports={
    getPantsMsByClientId,
    addPantsMs
 };