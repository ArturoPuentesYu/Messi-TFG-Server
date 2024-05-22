const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surnames: { type: String, required: true },
    age: { type: Number, required: true, min: 18 }
});

module.exports = mongoose.model('User', userSchema);
