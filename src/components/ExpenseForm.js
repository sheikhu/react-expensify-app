import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

import { addExpense } from '../actions/expenses';

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined,
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Description and Amount are required !' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }
  onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused })

  render() {
    return (
      <div>
        <h1>Expense Form</h1>

        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <div>
            <SingleDatePicker
              date={this.state.createdAt} // momentPropTypes.momentObj or null
              onDateChange={this.onDateChange} // PropTypes.func.isRequired
              focused={this.state.calendarFocused} // PropTypes.bool
              onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div>
            <textarea
              placeholder="Add a note for your expense (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
            >
            </textarea>
          </div>

          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
};

