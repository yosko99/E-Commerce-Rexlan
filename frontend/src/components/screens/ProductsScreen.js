import { productListFilteredAction } from '../../actions/productActions';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from '../product/ProductCard.component';
import Product from '../product/Product.component';
import Loading from '../Loading.component';
import React, { useEffect } from 'react';
import Filter from '../Filter.component';

const ProductsScreen = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.productListFiltered);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(productListFilteredAction(subcategory));
  }, [dispatch, subcategory]);

  const categoryTitle = subcategory.split('-');
  return (
      <Container>
        {/* Products title */}
        <div className='d-flex pt-2 text-uppercase '>
          <h3 className='me-2 mb-0'>{categoryTitle[categoryTitle.length - 1]}</h3>
          <p className='ms-1'>{products.length} Items</p>
        </div>
        {/* Products title */}

        <hr className='mt-0'/>
        <Row className='mt-2'>
          <Col lg={3}>
            <Filter />
          </Col>
          <Col lg={9}>
            <Row>
              {loading || loading === undefined
                ? <Loading />
                : error
                  ? <Navigate to={'/404'}/>
                  : products.length === 0
                    ? <h3 className='text-center'>Sorry we could not find any product :(</h3>
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
