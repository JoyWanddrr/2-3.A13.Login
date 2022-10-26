const mongoose = require('mongoose')
const loginSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
})

module.exports = mongoose.model('Login', loginSchema) 