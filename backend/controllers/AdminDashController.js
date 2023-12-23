const User = require("../models/userModels");
const Appointment = require("../models/appointmentModels.js");
const Prescription = require("../models/prescriptionModels.js");
const mongoose = require("mongoose");
const moment = require("moment");

// Get User Count By Role
const getUserCountByRole = async (req, res) => {
  try {
    const userType = req.body.userType;

    if (!userType) {
      return res.status(400).json({ errors: ["User type is missing in body"] });
    }

    const users = await User.find({ userType });
    res.json({ count: users.length });
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

// Get Appointment Count
const getAppointmentCount = async (req, res) => {
  try {
    const todayDate = moment(new Date()).format("YYYY-MM-DD");
    const doctorId = req.sender.doctorId;
    const patientId = req.sender.patientId;

    const query = {
      appointmentDate: todayDate,
      isTimeSlotAvailable: false,
      ...(doctorId && { doctorId }),
      ...(patientId && { patientId }),
    };

    const appointmentsToday = await Appointment.find(query);
    const pendingAppointmentsToday = await Appointment.find({
      ...query,
      completed: false,
    });

    res.json({
      message: "success",
      totalAppointments: appointmentsToday.length,
      pendingAppointments: pendingAppointmentsToday.length,
    });
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

// Get Patient Treated Count
const getPatientsTreatedCount = async (req, res) => {
  try {
    const doctorId = req.sender.doctorId;

    const prescriptions = await Prescription.find({})
      .populate({
        path: "appointmentId",
        populate: {
          path: "doctorId",
          match: { _id: mongoose.Types.ObjectId(doctorId) },
        },
      })
      .then((prescriptions) =>
        prescriptions.filter((pre) => pre.appointmentId.doctorId !== null)
      );

    res.json({
      message: "success",
      treatedPatients: prescriptions.length,
    });
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

module.exports = {
  getUserCountByRole,
  getAppointmentCount,
  getPatientsTreatedCount,
};
