const express = require("express");

const router = express.Router();

const usercontroller = require("../controllers/userController");
const logincontroller = require("../controllers/loginController");

route.post("/register", usercontroller.userRegister);
route.post("/login", logincontroller.LoginUser);

module.exports = router;
