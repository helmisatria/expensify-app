import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: 'expense id:1',
  amount: 195,
  createdAt: 0,
}, {
  id: '2',
  description: 'Rent',
  note: 'expense id:2',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
}, {
  id: '3',
  description: 'Credit Card',
  note: 'expense id:3',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf(),
}];

export default expenses;
