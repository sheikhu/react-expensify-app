import React, { PropTypes } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ReduxSweetAlert, { swal } from 'react-redux-sweetalert'; // eslint-disable-line

export class AddExpensePage extends React.Component {


  constructor(props) {
    super(props);
  }

  addExpense = (expense) => {
    this.props.startAddExpense(expense).then(() => {
      this.props.history.push('/dashboard');
    });

  };

  render() {
    return (
      <div>
        <ReduxSweetAlert show={true} />
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.addExpense}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    swal
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);
