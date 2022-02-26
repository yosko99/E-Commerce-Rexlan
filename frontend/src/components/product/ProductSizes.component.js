import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductSizes = ({ size, isPressed, onClick }) => {
  const [pressedState, setPressedState] = useState('outline-dark');

  const clickedHandler = () => {
    if (pressedState === 'outline-dark') {
      setPressedState('dark');
    } else {
      setPressedState('outline-dark');
    }
  };

  const onClickHandler = (e) => {
    if (onClick !== undefined) {
      onClick(e);
    }
    if (isPressed !== undefined) {
      clickedHandler();
    }
  };

  useEffect(() => {
    if (isPressed) {
      clickedHandler();
    }
  }, []);

  return (
    <>
      <input
        type='checkbox'
        id={size.value}
        value={size.value}
        defaultChecked={isPressed}
        name='size'
        style={{ display: 'none' }}/>
      <label
        htmlFor={size.value}
        className={`btn btn-${pressedState} my-2 me-2`}
        onClick={(e) => onClickHandler(e)} >
                {size.name}
      </label>
    </>
  );
};

ProductSizes.propTypes = {
  size: PropTypes.object.isRequired,
  isPressed: PropTypes.any,
  onClick: PropTypes.func
};

export default ProductSizes;
