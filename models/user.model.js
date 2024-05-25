const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surnames: { type: String, required: true },
  birthdate: { type: Date, required: true },
  is_admin: { type: Boolean, require: false },
});

module.exports = mongoose.model('User', userSchema);
