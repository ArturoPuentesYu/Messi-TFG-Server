const express = require('express');
const router = express.Router();
const {GetUser} = require('../controllers/user.controller.js');


router.get('/:id', GetUser);

module.exports = router;
