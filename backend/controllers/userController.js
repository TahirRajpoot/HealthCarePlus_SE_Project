const usermodel = require("../models/userModels");

async function AddUser(req, res) {
  const { email, password } = req.body;
  let user = await usermodel.findOne({ email });
  if (user) {
    return res.status(400).send("Email Already Exist");
  }
  try {
    user = new usermodel(req.body);
    user.password = await bcrypt.hash(password, 8);
    await user.save();
    res.status(200).send();
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: error.message });
  }
}
module.exports = {
  AddUser,
};
