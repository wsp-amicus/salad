const mongoose = require('mongoose')

// User schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  permission: {
    type: Number,
    default: 0
  }
})

const User = module.exports = mongoose.model('User', UserSchema)
