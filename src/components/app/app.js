import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../landing/landing';
import './app.scss';


const mapStateToProps = (state) => {
  const expenseKeys = Object.keys(state.expenses);
  let totalExpenses = 0;
  for (let i = 0; i < expenseKeys.length; i++) {
    totalExpenses += state.expenses[expenseKeys[i]]
      .reduce((acc, curr) => acc + parseInt(curr.amount, 10), 0);
  }
  return {
    totalBudget: state.categories.reduce((acc, curr) => acc + parseInt(curr.budget, 10), 0),
    totalExpenses,
  };
};

const App = (props) => {
  return (
    <div className='app'>
      <BrowserRouter>
        <div>
          <h1>Lab 32: Budget App</h1>
          <h4>Total Budget: ${props.totalBudget}, 
            Total Expenses: ${props.totalExpenses}, 
            Balance: ${props.totalBudget - props.totalExpenses}</h4>
          <Route exact path='/' component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );  
};

App.propTypes = {
  totalBudget: PropTypes.number,
  totalExpenses: PropTypes.number,
};

export default connect(mapStateToProps)(App);
