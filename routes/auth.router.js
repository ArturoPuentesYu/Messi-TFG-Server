const express = require('express');
const { registerUser, loginUser, getUser, getCurrentUser } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user/:id', getUser);
router.get('/me', getCurrentUser);

module.exports = router;
