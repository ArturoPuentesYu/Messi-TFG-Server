const express = require('express');
const router = express.Router();
const { GetUser, GetAllUser } = require('../controllers/user.controller.js');

router.get('/:id', GetUser);
router.get('/allUsers', GetAllUser);

module.exports = router;
