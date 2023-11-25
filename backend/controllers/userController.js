const usermodel = require("../models/userModels");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new usermodel({
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      contacts: req.body.contacts,
      password: hashPassword,
    });

    const user = await newUser.save();
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      contacts: user.contacts,
    });
  } catch (error) {
    res.status(505).json({ message: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await usermodel.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "Invalid Credientials" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(404).json({ message: "Invalid Credientials" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      contacts: user.contacts,
    });
  } catch (error) {
    res.status(404).json({ message: "Invalid Credientials" });
  }
};

const individualUser = asyncHandler(async (req, res) => {
  try {
    const user = await usermodel.findById(req.param.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const updateUser = async (req, res) => {
  try {
    const users = await usermodel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ users });
  } catch (error) {
    res.status(505).json(Error);
  }
};

module.exports = {
  userRegister,
  userLogin,
  updateUser,
  individualUser,
};
