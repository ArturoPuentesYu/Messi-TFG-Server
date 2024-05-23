const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const config = require('../config/jwtConfig');

const register = async ({ email, password, name, surnames, birthdate }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name, surnames, birthdate });
    await user.save();
    return user;
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
    return { token, user };
};

const getUserById = async (id) => {
    const user = await User.findById(id);
    if (!user) throw new Error('User not found');
    return user;
};

const verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecret);
};

module.exports = { register, login, getUserById, verifyToken };
