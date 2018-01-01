import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {

  constructor(props) {
    super(props);
  }

  addExpense = (expense) => {
    this.props.addExpense(expense); // from mapDispatchToProps
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
      addExpense: (expense) => dispatch(addExpense(expense))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);
