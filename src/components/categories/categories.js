import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/categories';
import Expenses from '../expenses/expenses';
import * as expenseActions from '../../action/expenses';
import ExpenseForm from '../expense-form/expense-form';
import './categories.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)), 
    categoryUpdate: data => dispatch(categoryActions.update(data)),
    expenseCreate: data => dispatch(expenseActions.create(data)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    expenses: state.expenses[ownProps.category.id],
  };
};

const Category = (props) => {
  const {
    category,
    expenses, 
    key,
    categoryRemove,
    categoryUpdate,
    expenseCreate,
  } = props;
  const categorySpend = expenses.reduce((acc, curr) => acc + parseInt(curr.amount, 10), 0);
  const categoryBalance = category.budget - categorySpend;
  return (
    <div className="category-item" data-cy="category-item" key={key}>
      <h2>Category: {category.name}</h2>
      <h4>Budget ${category.budget}, 
        Expenses: ${categorySpend}, Balance: ${categoryBalance}</h4>
      <button data-cy="category-delete-btn" onClick={() => categoryRemove(category)}> Delete Category </button>
      <CategoryForm category={category} onComplete={categoryUpdate}/>
      <ExpenseForm onComplete={expenseCreate} categoryId={category.id} />
      { expenses.map(expense => <Expenses 
        expense={expense} key={expense.id} categoryId={category.id}/>) }
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
  expenses: PropTypes.array,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  expenseCreate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
