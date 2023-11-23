const express = require("express");
const route = express.Router();

const usercontroller = require("../controllers/userController");

route.post("/register", usercontroller.AddUser);

module.exports = route;
