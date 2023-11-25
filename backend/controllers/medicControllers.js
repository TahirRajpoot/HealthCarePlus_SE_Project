const medicmodel = require("../models/medicModels");

const addMedicine = async (req, res) => {
  try {
    const { name, weight, cost, field, aka, details } = req.body;
    const image = `https://www.nepmeds.com.np/frontend/images/medicine-default-rx.png`;
    const by = "Health Care Plus";

    if (!name || !weight || !cost || !field) {
      return res.status(400).json({ message: "Every field is required" });
    }

    const medicine = await new medicmodel({
      name,
      aka,
      weight,
      cost,
      field,
      image,
      details,
      by,
    });
    const medicines = medicine.save();
    res.status(200).json(medicines);
  } catch (error) {
    console.error("Error in addMedicine:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllMedicine = async (req, res) => {
  try {
    const medicines = await medicmodel.find();
    res.status(200).json(medicines);
  } catch (error) {
    console.error("Error in getAllMedicine:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const individualMedicine = async (req, res) => {
  try {
    const medicine = await medicmodel.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.status(200).json(medicine);
  } catch (error) {
    console.error("Error in individualMedicine:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllMedicine,
  addMedicine,
  individualMedicine,
};
