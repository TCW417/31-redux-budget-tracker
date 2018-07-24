import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/categories';
import CategoryForm from '../category-form/category-form';
import Category from '../categories/categories';

class Landing extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <div className="create-form">
          <CategoryForm onComplete={categoryCreate} />
        </div>
        <div className="budget-items">
          {
            categories.map(category => <Category category={category} key={category.id} />)
          }
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    categories: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);