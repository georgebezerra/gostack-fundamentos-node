export interface IBalance {
  income: number;
  outcome: number;
  total: number;
}

 export interface IRequest {
  id?: string,
  title: string,
  value: number,
  type: 'income' | 'outcome',
  date: Date
}
