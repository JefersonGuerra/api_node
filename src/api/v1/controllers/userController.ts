const userService = require("../services/userService.ts");

const getAllUsers = (req, res) => {

    const users = userService.getAllUsersService();

    users.then(function (result) {
        res.status(200).json({
            data: result
        });
    }).catch(function (error) {
        res.status(500).json({ error });
    })

};

const createUser = (req, res) => {

    const data = req.body;
    const users = userService.createUserService(data);

    users.then(function (result) {
        res.status(201).json({
            success: "Usuário criado com sucesso!",
            data: result.dataValues
        });
    }).catch(function (error) {
        res.status(500).json({ error });
    })

};

module.exports = {
    getAllUsers,
    createUser,
};