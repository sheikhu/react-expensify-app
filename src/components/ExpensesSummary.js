import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {

  render() {
    const { expenseCount, expensesTotal } = this.props;
    const expenseWord = expenseCount == 1 ? 'expense' : 'expenses';
    return (
      <div>
        Viewing {expenseCount} {expenseWord}
        totaling {numeral(expensesTotal / 100).format('$0,0.00')}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)

  };
};
export default connect(mapStateToProps)(ExpensesSummary);