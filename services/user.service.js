const User = require('../models/user.model.js');

const userService = {
    getUserById: async (id) => {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    },
    createUser: async (userData) => {
        try {
            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;
