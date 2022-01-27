import productCardProperties from '../resources/default/productCardProperties';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const defaultImg = product.image_groups[0].images[0].link;
  const [productImg, setProductImg] = useState(defaultImg);
  const swatches = product.image_groups.filter((images) => images.view_type === 'swatch');

  const changeImg = (e) => {
    const variationValue = e.target.id;
    const newProductImg = product.image_groups.find((image) => image.variation_value === variationValue);
    if (newProductImg === undefined) {
      setProductImg(defaultImg);
    } else {
      setProductImg(newProductImg.images[0].link);
    }
  };

  return (
      <div className='d-flex justify-content-center my-2'>
        <Card style={{ width: '18rem' }}>
          <LinkContainer to={'/products/id/' + product.id} role='button'>
            <Card.Img style={{ maxHeight: '30vh', objectFit: 'contain' }} variant="top" src={'/images/' + productImg} />
          </LinkContainer>
            <Card.Body>
                {swatches.length > 0 && swatches.map((swatch, index) => (
                  <Image
                    style={{ width: '25px', height: '25px', objectFit: 'cover' }}
                    key={'swatch' + index + 1}
                    src={'/images/' + swatch.images[0].link}
                    className='my-2 me-2'
                    role="button"
                    alt="swatch"
                    id={swatch.variation_value}
                    onClick={changeImg}
                  />
                ))}
                <Card.Title style={{ fontSize: '1em' }}>{product.name}</Card.Title>
                <hr/>
                <Card.Text>{product.price} {productCardProperties.currency}</Card.Text>
            </Card.Body>
        </Card>
      </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
