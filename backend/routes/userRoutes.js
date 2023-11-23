const express = require("express");
const route = express.Router();

const usercontroller = require("../controllers/userController");
const logincontroller = require("../controllers/loginController");

route.post("/register", usercontroller.AddUser);
route.post("/login", logincontroller.LoginUser);

module.exports = route;
