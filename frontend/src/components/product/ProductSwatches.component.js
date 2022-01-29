import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const ProductSwatches = ({ swatches, onClick }) => {
  return (
    <>
      {swatches.length > 0 &&
        swatches.map((swatch, index) => (
          <Image
            style={{ width: '25px', height: '25px', objectFit: 'cover' }}
            key={'swatch' + index + 1}
            src={'/images/' + swatch.images[0].link}
            className='my-2 me-2'
            role="button"
            alt="swatch"
            id={swatch.variation_value}
            onClick={onClick}
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
