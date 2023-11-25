const hospitalmodel = require("../models/hospitalModels");
const doctormodel = require("../models/doctorModels");

const registerHospital = async (req, res) => {
  try {
    const { name, email, password, contact1, contact2 } = req.body;

    if (!name || !email || !password || !contact1 || !contact2) {
      return res.status(400).json({ message: "All Fields Are Required" });
    }

    const existingHospital = await hospitalmodel.findOne({ email });
    if (existingHospital) {
      return res.status(400).json({ message: "Email Already Registered" });
    }

    const newHospital = new hospitalmodel({
      name,
      email,
      password,
      contact1,
      contact2,
      events: [],
    });

    const savedHospital = await newHospital.save();
    if (savedHospital) {
      res.status(200).json(savedHospital);
    } else {
      res.status(400).json({ message: "Failed to Register Hospital" });
    }
  } catch (error) {
    console.error("Error in registerHospital:", error);
    res.status(505).json({ message: "Internal Server Error" });
  }
};

const loginHospital = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingHospital = await hospitalmodel.findOne({ email });

    if (existingHospital && (await existingHospital.matchPassword(password))) {
      return res.status(200).json(existingHospital);
    } else {
      return res.status(404).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error in loginHospital:", error);
    res.status(505).json({ message: "Internal Server Error" });
  }
};

const allHospitals = async (req, res) => {
  try {
    const allHospitals = await hospitalmodel.find();
    res.status(200).json(allHospitals);
  } catch (error) {
    console.error("Error in allHospitals:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateHospital = async (req, res) => {
  try {
    const hospital = await hospitalmodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        $set: req.body,
      }
    );

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    res.status(200).json(hospital);
  } catch (error) {
    console.error("Error in updateHospital:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const individualHospital = async (req, res) => {
  try {
    const hospital = await hospitalmodel
      .findById(req.params.id)
      .select("-password");

    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerHospital,
  loginHospital,
  allHospitals,
  updateHospital,
  individualHospital,
};
