import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductSwatches = ({ swatch, onClick, isChecked }) => {
  const [roundedState, setRoundedRef] = useState('');

  const clickedHandler = () => {
    if (roundedState === '') {
      setRoundedRef('rounded-circle');
    } else {
      setRoundedRef('');
    }
  };

  const onClickHandler = (e) => {
    if (onClick !== undefined) {
      onClick(e);
    }
    if (isChecked !== undefined) {
      clickedHandler();
    }
  };

  useEffect(() => {
    if (isChecked) {
      clickedHandler();
    }
  }, []);

  return (
    <>
    {isChecked !== undefined
      ? <>
      <input
        type='checkbox'
        id={swatch.variation_value}
        defaultChecked={isChecked}
        value={swatch.variation_value}
        name='color'
        style={{ display: 'none' }}/>
      <label htmlFor={swatch.variation_value} >
        <Image
          style={{ width: '25px', height: '25px', objectFit: 'cover' }}
          src={'/images/' + swatch.images[0].link}
          className={'my-2 me-2 ' + roundedState}
          role="button"
          alt={roundedState}
          id={swatch.variation_value}
          onClick={(e) => onClickHandler(e)}
        />
      </label>
    </>
      : <Image
          style={{ width: '25px', height: '25px', objectFit: 'cover' }}
          src={'/images/' + swatch.images[0].link}
          className={'my-2 me-2 ' + roundedState}
          role="button"
          alt={roundedState}
          id={swatch.variation_value}
          onClick={(e) => onClickHandler(e)}
        />
    }
    </>
  );
};

ProductSwatches.propTypes = {
  swatch: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  isChecked: PropTypes.bool
};

export default ProductSwatches;
