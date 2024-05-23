const { register, login, getUserById, verifyToken } = require('../services/auth.service');

const registerUser = async (req, res) => {
    try {
        const user = await register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { token, user } = await login(req.body);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCurrentUser = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = verifyToken(token);
        const user = await getUserById(decoded.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { registerUser, loginUser, getUser, getCurrentUser };
