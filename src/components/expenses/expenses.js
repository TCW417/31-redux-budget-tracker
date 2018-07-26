import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expenses';
import './expenses.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    expenseRemove: data => dispatch(expenseActions.remove(data)), 
    expenseUpdate: data => dispatch(expenseActions.update(data)),
  };
};

const Expenses = (props) => {
  const {
    expense, 
    key,
    categoryId,
    expenseRemove,
    expenseUpdate,
  } = props;
  return (
    <div className="expense-item" key={key}>
      <h2> Expense: { expense.desc }: Amount: ${ expense.amount } </h2>
      <button onClick={() => expenseRemove(expense)}>Delete Expense</button>
      <ExpenseForm expense={expense} categoryId={categoryId} onComplete={expenseUpdate}/>
    </div>
  );
};

Expenses.propTypes = {
  expense: PropTypes.object,
  key: PropTypes.number,
  categoryId: PropTypes.string,
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Expenses);
