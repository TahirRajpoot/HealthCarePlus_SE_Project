const express = require("express");

const router = express.Router();

const doctorcontroller = require("../controllers/doctorController");

router.post("/doctorLogin", doctorcontroller.doctorLogin);
router.post("/doctorRegister", doctorcontroller.doctorRegister);
router.put("/:id/doctorReview", doctorcontroller.doctorReview);

module.exports = router;
