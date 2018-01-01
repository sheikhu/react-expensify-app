import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
  <div>
    <h3>
      <Link to={`/edit/${props.expense.id}`}>{props.expense.description}</Link>
    </h3>
    <p>
      {numeral(props.expense.amount / 100).format('$0,0.00')}
      |
      {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;