// User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Otros campos que puedas necesitar para tu modelo de usuario
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;