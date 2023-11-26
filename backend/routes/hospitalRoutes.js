const express = require("express");

const router = express.Router();

const hospitalcontroller = require("../controllers/hospitalControllers");

router.post("/registerHospital", hospitalcontroller.registerHospital);
router.post("/loginHospital", hospitalcontroller.loginHospital);
router.get("/allHospital", hospitalcontroller.allHospitals);
router.get("/:id", hospitalcontroller.individualHospital);
router.put("/:id/updateHospital", hospitalcontroller.updateHospital);

module.exports = router;
