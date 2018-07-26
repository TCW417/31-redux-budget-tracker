import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/categories';
import CategoryForm from '../category-form/category-form';
import Category from '../categories/categories';
import './landing.scss';

const mapStateToProps = (store) => {
  return {
    categories: store.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

const Landing = (props) => {
  const { categories, categoryCreate } = props;
  return (
    <div>
      <div className="create-form" data-cy="create-category-form">
        <CategoryForm onComplete={categoryCreate} />
      </div>
      <div className="budget-items">
        {
          categories.map(category => <Category category={category} key={category.id} />)
        }
      </div>
    </div>
  );
};

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
