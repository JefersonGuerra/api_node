const userService = require("../services/userService.ts");

const getAllUsers = (req, res) => {
    const users = userService.getAllUsersService(res);
    res.send(users);
};

module.exports = { getAllUsers };