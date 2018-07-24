import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/categories';
import './categories.scss';

class Category extends React.Component {
  render() {
    const {
      category, 
      key,
      categoryDestroy,
      categoryUpdate,
    } = this.props;
    return (
      <div className="category-item" key={key}>
        <h2> { category.name }: ${ category.budget } </h2>
        <button onClick={() => categoryDestroy(category)}> Destroy! </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDestroy: data => dispatch(categoryActions.remove(data)), 
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);
