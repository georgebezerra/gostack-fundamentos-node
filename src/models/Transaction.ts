import { uuid } from 'uuidv4'

class Transaction {
  public id: string
  public title: string
  public value: number
  public date: Date
  public type: 'income' | 'outcome'

  constructor({ title, value, date, type }: Omit<Transaction, 'id'>) {
    this.id = uuid()
    this.title = title
    this.value = value
    this.date = date
    this.type = type
  }

}

export default Transaction;
