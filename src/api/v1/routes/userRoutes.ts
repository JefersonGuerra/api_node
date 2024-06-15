const express = require("express");
const userController = require("../controllers/userController.ts");

const userRoute = express.Router();

userRoute.get("/", userController.getAllUsers);

module.exports = userRoute;