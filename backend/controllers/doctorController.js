const doctormodel = require("../models/doctorModels");
const hospitalmodel = require("../models/hospitalModels");
const bcrypt = require("bcryptjs");

const doctorRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    const existDoctor = await doctormodel.findOne({ email: req.body.email });
    if (existDoctor) {
      res.status(404).json({ message: "Doctor Already Exists" });
    }

    const newDoctor = new doctormodel({
      name: req.body.name,
      email: req.body.email,
      spec: req.body.spec,
      exp: req.body.exp,
      contact: req.body.contact,
      workingOn: req.body.workingOn,
      graduatedFrom: req.body.graduatedFrom,
      password: hashpassword,
    });

    const doctors = await newDoctor.save();
    res.status(200).json({ doctors });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Failed To Register" });
  }
};

const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await doctormodel.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }

    const validPassword = await bcrypt.compare(password, doctor.password);

    if (!validPassword) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }

    const { _id, name, spec, exp, contact, workingOn, graduatedFrom } = doctor;

    res.status(200).json({
      _id,
      name,
      email,
      spec,
      exp,
      contact,
      workingOn,
      graduatedFrom,
    });
  } catch (error) {
    console.error("Error in doctorLogin:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const doctorReview = async (req, res) => {
  const { comment, userId, ratings, username, profilePic } = req.body;

  try {
    const updatedDoctor = await Doctor.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          reviews: {
            comment,
            userId,
            ratings,
            username,
            profilePic,
          },
        },
      },
      {
        new: true,
      }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json(updatedDoctor.reviews);
  } catch (error) {
    console.error("Error in doctorReview:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  doctorRegister,
  doctorLogin,
  doctorReview,
};
