import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const ProductImage = ({ product }) => {
  return (
    <LinkContainer to={'/products/id/' + product.id} role='button'>
      <Image fluid
          alt={product.image_groups[0].images[0].alt}
          src={'/images/' + product.image_groups[0].images[0].link}/>
    </LinkContainer>
  );
};

ProductImage.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductImage;
