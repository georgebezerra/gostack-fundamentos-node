import { startOfHour } from 'date-fns'

import { IRequest } from '../interface'
import Transaction from '../models/Transaction'
import TransactionsRepository from '../repositories/TransactionsRepository'

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, date, type }: IRequest): Transaction {
    const transactionDate = startOfHour(date)

    if(!["income", "outcome"].includes(type)){
      throw new Error("Transaction type is invalid")
    }

    const { total } = this.transactionsRepository.getBalance()

    if(type === 'outcome' && total < value){
      throw new Error('You do not have enought balance')
    }

    const transaction = this.transactionsRepository.create({
        title,
        value,
        date: transactionDate,
        type
      })

    return transaction

  }
}

export default CreateTransactionService;
