const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator')

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true,  validate: [validator.isEmail, 'Please enter valid email address']},
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
