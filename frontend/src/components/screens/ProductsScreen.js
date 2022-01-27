import { productListFilteredAction } from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard.component';
import Product from '../Product.component';
import Loading from '../Loading.component';
import React, { useEffect } from 'react';

const ProductsScreen = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productListFiltered);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(productListFilteredAction(subcategory));
  }, [dispatch, subcategory]);

  return (
      <Container>
        <Row className='mt-2'>
          <Col lg={3}>Filter</Col>
          <Col lg={9}>
            <Row>
              {loading
                ? <Loading />
                : error
                  ? <Navigate to={'/404'}/>
                  : products.map((product, index) => (
                    <Col lg={4} md={6} sm={12} key={index + 1}>
                      <Product product={product} ProductComponent={ProductCard}/>
                    </Col>
                  ))}
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default ProductsScreen;
