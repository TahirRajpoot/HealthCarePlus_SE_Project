const usermodel = require("../models/userModels");
const bcrypt = require("bcryptjs");

async function LoginUser(req, res) {
  try {
    const user = await usermodel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User Email Does Not Exist. " });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const { password, ...rest } = user.toObject();
    return res.send(rest);
  } catch (error) {
    return res.status(500).json({ message: "Error Occurs" });
  }
}

module.exports = {
  LoginUser,
};
