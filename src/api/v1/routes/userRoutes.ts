const express = require("express");
const userController = require("../controllers/userController.ts");

const userRoute = express.Router();

userRoute.get("/", userController.getAllUsers);
userRoute.post("/", userController.createUser);

module.exports = userRoute;