import { Router } from 'express'
import { parseISO } from 'date-fns'

import TransactionsRepository from '../repositories/TransactionsRepository'
import CreateTransactionService from '../services/CreateTransactionService'

const transactionRouter = Router();
const transactionsRepository = new TransactionsRepository()

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all()
    const balance = transactionsRepository.getBalance()

    return response.json({
      transactions,
      balance
    })

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, date, type } = request.body

    const parsedDate = parseISO(date)

    const createTransaction = new CreateTransactionService(
      transactionsRepository
    )

    const transaction = createTransaction.execute({
      title,
      value,
      date: parsedDate,
      type
    })

    return response.json(transaction)

  } catch (e) {

      return response.status(400).json({ error: e.message })
  }

});

export default transactionRouter
