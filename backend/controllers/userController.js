const usermodel = require("../models/userModels");

async function AddUser(req,res){
    try{
        const Users = await usermodel.create(req.body);
        res.status(200).json({ Users });
    }catch(error){
        console.log(error.message);

        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    AddUser,
}