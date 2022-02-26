import Loading from '../../Loading.component';
import PropTypes from 'prop-types';
import React from 'react';

const Category = ({ categoryLoading, categories, genderHandler, genderRadioState }) => {
  return (
    <>
    <h6 className='mt-3'>Category</h6>
    {categoryLoading || categoryLoading === undefined
      ? <Loading height='10vh'/>
      : categories.map((category, index) => (
      <div className="form-check" key={index + 1}>
        <input
          className="form-check-input"
          onChange={(e) => genderHandler(e)}
          checked={genderRadioState === category.name.toLowerCase()}
          type="radio"
          id={category.name.toLowerCase()}/>
        <label className="form-check-label fs-5">{category.name}</label>
      </div>
      ))
    }
    </>
  );
};

Category.propTypes = {
  genderHandler: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  genderRadioState: PropTypes.string,
  categoryLoading: PropTypes.bool
};

export default Category;
