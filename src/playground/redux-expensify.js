import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: '123',
    description: 'hoam',
    note: 'No pain no gain',
    amount: 54500,
    createdAt: new Date(),
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date of amount
    startDate: undefined,
    endDate: undefined,
  },
};
