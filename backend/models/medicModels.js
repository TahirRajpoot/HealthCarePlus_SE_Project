const mongoose = require("mongoose");

const medicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  aka: {
    type: String,
    default: "",
  },
  weight: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  details: {
    type: String,
    required: true,
  },
  by: {
    type: String,
  },
});

module.exports = mongoose.model("Medic", medicSchema);
