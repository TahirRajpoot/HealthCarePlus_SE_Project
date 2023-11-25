const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    dob: {
      type: String,
    },
    age: {
      type: Number,
    },
    contacts: {
      type: Number,
    },
    appointmentsmade: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointments",
    },

    isDisabled: {
      type: Boolean,
    },
    medicines: [
      {
        desc: String,
        disease: String,
        date1: [Date],
      },
    ],
    report: [
      {
        type: String,
        img: String,
        desc: String,
        title: String,
        date: Date.now,
      },
    ],
    reports: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
