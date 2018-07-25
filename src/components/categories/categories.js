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

class Category extends React.Component {
  render() {
    const {
      category,
      expenses, 
      key,
      categoryRemove,
      categoryUpdate,
      expenseCreate,
    } = this.props;
    return (
      <div className="category-item" key={key}>
        <h2> { category.name }: ${ category.budget } </h2>
        <button onClick={() => categoryRemove(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <ExpenseForm onComplete={expenseCreate} categoryId={category.id} />
        { expenses.map(expense => <Expenses expense={expense} key={expense.id} />) }
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  expenses: PropTypes.array,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  expenseCreate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
