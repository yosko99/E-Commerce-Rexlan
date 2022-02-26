/* eslint-disable react/prop-types */
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Loading.component';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Subcategory = ({ categoryLoading, categories, genderRadioState }) => {
  const navigate = useNavigate();
  const { subcategory: subcategoryURL } = useParams();
  const [subcategoryRadioState, setSubcategoryRadioState] = useState(subcategoryURL);

  // Change route depending on clicked button
  const subcategoryHandler = (e) => {
    const selectedSubcategory = e.target.id;
    navigate('/products/category/' + selectedSubcategory);

    setSubcategoryRadioState(selectedSubcategory);
  };

  return (
    <>
    <h6 className='mt-4'>Subcategory</h6>
    {categoryLoading || categoryLoading === undefined
      ? <Loading height='10vh'/>
      : categories.find((category) => category.name.toLowerCase() === genderRadioState)
        .categories.map((subcategory) =>
          (subcategory.categories.map((category, index) =>
            (<div className="form-check" key={index + 1}>
            <input
              className="form-check-input my-2"
              onChange={(e) => subcategoryHandler(e)}
              checked={subcategoryRadioState === category.id}
              type="radio"
              id={category.id}/>
            <label className="form-check-label fs-5">{category.name}</label>
          </div>))))
      }
    </>
  );
};

export default Subcategory;
