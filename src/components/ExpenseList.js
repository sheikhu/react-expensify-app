import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) :
        (
          props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} expense={expense} />
          ))
        )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseList);