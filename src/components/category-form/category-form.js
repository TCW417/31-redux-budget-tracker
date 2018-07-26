import React from 'react';
import PropTypes from 'prop-types';
import './category-form.scss';

const defaultState = {
  name: '',
  budget: 0,
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.category) {
      this.setState({ name: '', budget: 0 });
    }
  }


  render() {
    const buttonText = this.props.category ? 'Update' : 'Create New Category';
    const createCatName = this.props.category ? null
      : <div>
        <label htmlFor="name">Budget category:</label>
        <input 
          type="text"
          name="name"
          placeholder="Category name..."
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>;
    return (
      <fieldset className="category-form" data-cy="category-form">
      <form
        onSubmit={ this.handleSubmit }
      >
        {createCatName}
        <label htmlFor="budget">{this.props.category ? 'Update budgeted amount:' : 'Budgeted Amount:'}</label>
        <input
          type="number"
          name="budget"
          placeholder="Budgeted amount..."
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
      </fieldset>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
