import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {

  const action = removeExpense({ id: '1234' });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "1234"
  });
});

test('should setup edit expense action object', () => {

  const action = editExpense('1234', { name: 'updated stuff' });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "1234",
    updates: { name: 'updated stuff' }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 190500,
    createdAt: 1000,
    note: 'Last month rent'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});
test('should setup add expense action object with default values', () => {

  const action = addExpense({});

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  })
});