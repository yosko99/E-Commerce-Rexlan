import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ProductSwatches = ({ swatches, onClick }) => {
  const [clickedState, setClickedState] = useState('');

  const clickedHandler = () => {
    if (clickedState === '') {
      setClickedState('rouned-circle');
    } else {
      setClickedState('');
    }
  };
  return (
    <>
      {swatches.length > 0 &&
        swatches.map((swatch, index) => (
          <Image
            style={{ width: '25px', height: '25px', objectFit: 'cover' }}
            key={'swatch' + index + 1}
            src={'/images/' + swatch.images[0].link}
            className={'my-2 me-2 ' + clickedState}
            role="button"
            alt="swatch"
            id={swatch.variation_value}
            onClick={(e) => { onClick(e); clickedHandler(); }}
          />
        ))}
    </>
  );
};

ProductSwatches.propTypes = {
  swatches: PropTypes.array.isRequired,
  onClick: PropTypes.func
};

export default ProductSwatches;
