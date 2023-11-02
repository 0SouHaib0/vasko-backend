
const clientsModel = require("../models/clientsModel");

function getAllClients(req, res) {
    clientsModel.getAllClients((err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
}

function getClientById(req,res){
    let clientId= req.params.id;
    clientsModel.getClientById(clientId,(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({ error: "Internal Server Error" });
    }
    if (!data) {
        return res.status(404).json({ error: "Client not found" });
      }
    return res.json(data);
});
}

function addClient(req,res){
    const { name, email, phone } = req.body;

    clientsModel.addClient(name,email,phone,(err,data)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "Client created successfully", id: data });
    })
}
module.exports = {
    getAllClients,
    addClient,
    getClientById
};