const User = require('../models/user.model.js');

const userService = {
    getUser: async (id) => {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;
