import { uuid } from 'uuidv4';

class Transaction {
  id: string;
  title: string;
  value: number;
  date: Date;
  type: 'income' | 'outcome';

  constructor({ title, value, date, type }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.date = date;
    this.type = type;
  }

}

export default Transaction;
