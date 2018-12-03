import { transactionsController } from '../controllers/transactionsController'
import express from 'express'
const router = express.Router()

router.post('/', transactionsController.post)

router.get('/', transactionsController.get)

module.exports = router;