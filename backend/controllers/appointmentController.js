const usermodel = require("../models/userModels");
const hospitalmodel = require("../models/hospitalModels");
const appointmentmodel = require("../models/appointmentModels");

const appointmentDetails = async (req, res) => {
  try {
    const hospitals = await hospitalmodel.findById(req.params.id);
    const {
      name,
      age,
      location,
      contact,
      email,
      patient,
      date,
      services,
      desc,
    } = req.body;

    if (!name || !contact || !location) {
      res.status(400).json({ error: "ALL FIELDS REQUIRED" });
      return;
    }

    const newAppointment = new appointmentmodel({
      name,
      age,
      location,
      contact,
      email,
      patient,
      withHospital: req.params.id,
      date,
      services,
      desc,
    });

    await newAppointment.save();
    hospitals.appointments.push(newAppointment._id);
    await hospitals.save();

    res.status(200).json(newAppointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eachHospitalAllAppointment = async (req, res) => {
  try {
    const hospital = await hospitalmodel.findById(req.params.id);

    const appointmentsPromises = hospital.appointments.map((appointmentId) =>
      appointmentmodel.findById(appointmentId)
    );

    const appointments = await Promise.all(appointmentsPromises);

    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const medicineDetails = async (req, res) => {
  try {
    const { desc, disease, timeInterval, time } = req.body;

    const medInfo = await appointmentmodel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          medicines: {
            desc,
            disease,
            timeInterval,
            time,
          },
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json(medInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const followUpAppointment = async (req, res) => {
  try {
    const doctor = req.body.doctorId;
    if (doctor) {
      const newDate = await appointmentmodel.findByIdAndUpdate(req.params.id, {
        followUp: req.body.followUp,
        token: req.body.token,
        docArrival: req.body.doctime,
        assignedDoctor: req.body.assignedDoc,
        status: { pending: false, done: true, rejected: false },
      });

      res.status(200).json(newDate);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Something went wrong" });
  }
};

const eachAppointmentDetails = async (req, res) => {
  try {
    const appointment = await Appointments.findById(req.params.id);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports = {
  appointmentDetails,
  eachHospitalAllAppointment,
  followUpAppointment,
  medicineDetails,
  eachAppointmentDetails,
};
