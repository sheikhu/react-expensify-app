import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUT
const sortByAmout = () => ({
  type: 'SORT_BY_AMOUT'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    default:
      return state;
  }
};

// Filter Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy == 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    if (sortBy == 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filterReducer
}));

store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expenses, state.filters));
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Car', amount: 300, createdAt: -3000 }));

//store.dispatch(setTextFilter('ca'));

//store.dispatch(sortByDate());
store.dispatch(sortByAmout());

//store.dispatch(setStartDate(125));
//store.dispatch(setEndDate(200));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));


const demoState = {
  expenses: [{
    id: '98uWdijf',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  },
  {
    id: '3iksjdli',
    description: 'February Rent',
    note: 'This was the first payment for the new address',
    amount: 62500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined,
  }
};