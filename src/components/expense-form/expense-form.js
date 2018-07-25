import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  desc: '',
  amount: 0,
  categoryId: '',
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || defaultState;
    this.state.categoryId = props.categoryId;
    console.log('expense-form constructor state', this.state);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.expense) {
      this.setState(defaultState);
    }
  }

  render() {
    console.log('Expense-form render state', this.state);
    const buttonText = this.props.expense ? 'Update Expense' : 'Create Expense';
    return (
      <form
        onSubmit={ this.handleSubmit }
        className="expense-form"
      >
        <input 
          type="text"
          name="desc"
          placeholder="Expense description..."
          value={this.state.desc}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Expense amount..."
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  expense: PropTypes.object,
  categoryId: PropTypes.string,
};
