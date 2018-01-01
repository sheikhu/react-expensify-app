import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '100',
      description: 'rent',
      note: '',
      amount: 1000
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      description: 'new description',
      note: 'new note',
      amount: 20,
      createdAt: 0
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state[0]).toEqual({
    id: '1',
    description: 'new description',
    note: 'new note',
    amount: 20,
    createdAt: 0
  });
});

test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'new description',
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});