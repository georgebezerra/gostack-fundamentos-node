import Transaction from '../models/Transaction';
import { IBalance, IRequest } from '../interface'

class TransactionsRepository {
  private transactions: Transaction[]

  constructor() {
    this.transactions = []
  }

  public all(): Transaction[] {
    return this.transactions
  }
  
  public create({ title, value, date, type}: IRequest): Transaction {
      const transaction = new Transaction({ title, value, date, type })

      this.transactions.push(transaction)

      return transaction
  }

  public getBalance(): IBalance {
    const { income, outcome } = this.transactions.reduce(
      (accumulator: IBalance, transaction: Transaction) => {
          switch(transaction.type){
            case "income":
              accumulator.income += transaction.value;
              break;
            case "outcome":
              accumulator.outcome += transaction.value;
              break;
            default:
              break;
        }
     return accumulator
    },{
      income: 0,
      outcome: 0,
      total: 0
    })

    const total = income - outcome

    return { income, outcome, total }
  }
}

export default TransactionsRepository
