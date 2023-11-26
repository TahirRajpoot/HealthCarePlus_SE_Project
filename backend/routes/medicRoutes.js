const express = require("express");

const router = express.Router();

const mediccontroller = require("../controllers/medicControllers");

router.post("/newMedicine", mediccontroller.addMedicine);
router.get("/allMedicine", mediccontroller.getAllMedicine);
router.get("/:id", mediccontroller.individualMedicine);

module.exports = router;
