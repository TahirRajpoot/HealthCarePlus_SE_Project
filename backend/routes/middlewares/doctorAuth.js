const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Doctor = require("../../models/doctorModels");

async function doctorAuth(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY);

    if (payload.userType !== "Doctor") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const doctor = await Doctor.findOne({
      userId: mongoose.Types.ObjectId(payload.id),
    });

    if (!doctor) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.sender = {
      id: payload.id,
      userType: payload.userType,
      doctorId: doctor._id,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = doctorAuth;
