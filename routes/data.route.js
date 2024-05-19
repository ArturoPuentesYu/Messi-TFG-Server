const express = require('express');
const router = express.Router();
const DataController = require('../controllers/data.controller.js');

router.get('/getMessiStats', DataController.getMessiStats);

module.exports = router;
