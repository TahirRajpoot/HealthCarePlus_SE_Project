const usermodel = require("../models/userModels");

async function AddUser(req,res){
    try{
        const Users = await usermodel.create(req.body);
        res.status(200).json({ Users });
    }catch(error){
        console.log(error);
        res.status(500).json({ message: message.error });
    }
}


module.exports = {
    AddUser,
}