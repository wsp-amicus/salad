const mongoose = require('mongoose')

// Transactions schema
const TransactionsSchema = mongoose.Schema({
  product: {
    type: String,
  },
  price: {
    type: Number,
  },
  username: {
    type: String,
  },
  payment: {
    type: String,
  },
  transId: {
    type: Number,
    require: true,
  }
})

module.exports = mongoose.model('Transactions', TransactionsSchema)
