const db = require("../../../database/models");

const getAllUsersService = async () => {

    const user = await db.User.findAll({
        attributes: ['id', 'name', 'email', 'image']
    });

    return user;

};

const createUserService = async (data) => {
    const user = await db.User.create(data);
    return user;
}

module.exports = {
    getAllUsersService,
    createUserService
};