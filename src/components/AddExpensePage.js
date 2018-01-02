import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {

  constructor(props) {
    super(props);
  }

  addExpense = (expense) => {
    this.props.startAddExpense(expense); // from mapDispatchToProps
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          onSubmit={this.addExpense}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);
