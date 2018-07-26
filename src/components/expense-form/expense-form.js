import React from 'react';
import PropTypes from 'prop-types';
import './expense-form.scss';

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
    const buttonText = this.props.expense ? 'Update Expense' : 'Create Expense';
    const descLabelText = this.props.expense ? 'Update Expense Description:' : 'Expense Description:';
    const amountLabelText = this.props.expense ? 'Update Expense Amount:' : 'Expense Amount:';

    return (
      <fieldset className="expense-form" data-cy="expense-form">
      <form
        onSubmit={ this.handleSubmit }
      >
        <label htmlFor="desc">{descLabelText}</label>
        <input 
          type="text"
          name="desc"
          placeholder="Expense description..."
          value={this.state.desc}
          onChange={this.handleChange}
        />
        <label htmlFor="amount">{amountLabelText}</label>
        <input
          type="number"
          name="amount"
          placeholder="Expense amount..."
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
      </fieldset>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  expense: PropTypes.object,
  categoryId: PropTypes.string,
};
