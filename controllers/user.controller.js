const {getUser} = require('../services/user.service.js');

const userController = {

     GetUser: async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    }
};

module.exports = userController;
