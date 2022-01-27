import { productListAction } from '../actions/productActions';
import { Image, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Loading from './Loading.component';

import React, { useEffect } from 'react';

const ProductImage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(productListAction(6));
  }, [dispatch]);

  return (
    <Row className='mb-5'>
    {loading
      ? <Loading />
      : error
        ? <h3>{error}</h3>
        : products.map((product, index) => (
            <Col key={index + 1} lg={2} md={4} sm={6} className='py-2'>
                <LinkContainer to={'/products/' + product.id} role='button'>
                    <Image fluid
                        alt={product.image_groups[0].images[0].alt}
                        src={'./images/' + product.image_groups[0].images[0].link}/>
                </LinkContainer>
            </Col>
        ))}
    </Row>
  );
};

export default ProductImage;
