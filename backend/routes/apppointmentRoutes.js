const express = require("express");

const router = express.Router();

const appointmentcontroller = require("../controllers/appointmentController");

router.post(
  "/:id/appointment/setappointment",
  appointmentcontroller.appointmentDetails
);

router.get(
  "/:id/appointment/hospitalallappointments",
  appointmentcontroller.eachHospitalAllAppointment
);

router.get(
  "/:id/appointment/oneappointment",
  appointmentcontroller.eachAppointmentDetails
);

router.post("/:id/followup", appointmentcontroller.followUpAppointment);

router.post("/:id/medicinedetails", appointmentcontroller.medicineDetails);

module.exports = router;
