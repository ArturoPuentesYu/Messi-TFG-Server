const Player = require('../models/data.model.js');

const dataService = {
    getMessiStats: async () => {
        try {
            const player = await Player.find({});
            return player;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = dataService;
