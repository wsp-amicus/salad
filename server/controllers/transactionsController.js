import Transactions from '../models/transactions'

export const transactionsController = {
  get: async (req, res) => {
    try {
      const transactions = await Transactions.find().lean().exec()
      res.status(200).send(transactions)
    } catch (err) {
      throw err
    }
  },
  post: async (req, res) => {
    const { product, price, username, payment } = req.body
    try {
      const count = await Transactions.find().count()
      const inserted = await Transactions.insertMany([{
        transId: count + 1,
        product,
        price,
        username,
        payment

      }])
      res.status(200).send(inserted)
    } catch (err) {
      throw err
    }
  }
}
