import productCardProperties from '../../resources/default/productCardProperties';
import ProductSwatches from './ProductSwatches.component';
import { LinkContainer } from 'react-router-bootstrap';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const ProductCard = ({ product, productImgState, swatches, changeImg }) => {
  return (
      <div className='d-flex justify-content-center my-2'>
        <Card style={{ width: '18rem' }}>
          <LinkContainer to={'/products/id/' + product.id} role='button'>
            <Card.Img style={{ maxHeight: '30vh', objectFit: 'contain' }} variant="top" src={'/images/' + productImgState} />
          </LinkContainer>
            <Card.Body>
                <ProductSwatches swatches={swatches} onClick={changeImg} />
                <Card.Title style={{ fontSize: '1em' }}>{product.name}</Card.Title>
                <hr/>
                <Card.Text>{product.price} {productCardProperties.currency}</Card.Text>
            </Card.Body>
        </Card>
      </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  productImgState: PropTypes.string.isRequired,
  changeImg: PropTypes.func.isRequired,
  swatches: PropTypes.array
};

export default ProductCard;
