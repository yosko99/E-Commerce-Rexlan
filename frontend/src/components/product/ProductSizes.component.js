import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const ProductSizes = ({ sizes }) => {
  return (
      <>
      {sizes.length > 0
        ? sizes.map((size, index) => (
        <Button
            key={'size' + index + 1}
            className='my-2 me-2'
            id={size.value}
            variant="outline-dark"
            disabled={!size.orderable}>
                {size.name}
        </Button>
        ))
        : <Button
          className='my-2 me-2'
          variant="outline-dark"
          disabled>
            -
        </Button>}
      </>
  );
};

ProductSizes.propTypes = {
  sizes: PropTypes.array
};

export default ProductSizes;
