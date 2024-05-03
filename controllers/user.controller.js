const userService = require('../services/user.service.js');

const userController = {

     getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    addUser: async (req, res) => {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = userController;
