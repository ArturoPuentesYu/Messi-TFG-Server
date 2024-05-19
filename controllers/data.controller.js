const dataService = require('../services/data.service.js');

const dataController = {
     getMessiStats: async (req, res) => {
        try {
            const data = await dataService.getMessiStats();
            if (data) {
                res.json(data);
            } else {
                res.status(404).send('data not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
};

module.exports = dataController;
