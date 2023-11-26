const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

const port = 8080;
const dbconnection = require("./utilis/db");

const userroutes = require("./routes/userRoutes");
const appointmentroutes = require("./routes/apppointmentRoutes");
const doctorroutes = require("./routes/doctorRoutes");
const hospitalroutes = require("./routes/hospitalRoutes");
const medicroutes = require("./routes/medicRoutes");

app.use(bodyparser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userroutes);
app.use("/api/userAppointment", appointmentroutes);
app.use("/api/doctor", doctorroutes);
app.use("/api/hospitals", hospitalroutes);
api.use("/api/medic", medicroutes);

dbconnection();

app.listen(port, () => {
  console.log(`Port  is listening at local host ${port}`);
});
