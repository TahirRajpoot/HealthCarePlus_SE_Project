const express = require("express");

const router = express.Router();

const usercontroller = require("../controllers/userController");
const logincontroller = require("../controllers/loginController");

router.post("/register", usercontroller.userRegister);
router.post("/login", logincontroller.LoginUser);

module.exports = router;
