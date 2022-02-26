import { productListFilteredAction, subcategoryProductListAction } from '../../actions/productActions';
import ProductCard from '../product/ProductCard.component';
import OffCanvas from '../partials/OffCanvas.component';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import Product from '../product/Product.component';
import React, { useEffect, useState } from 'react';
import Filter from '../filter/Filter.component';
import Loading from '../Loading.component';

const ProductsScreen = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.productListFiltered);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(productListFilteredAction(subcategory, window.location.search));
    dispatch(subcategoryProductListAction(subcategory));
  }, [dispatch, subcategory]);

  const [showFilterState, setShowFilterState] = useState((window.innerWidth < 1000));
  window.addEventListener('resize', () => setShowFilterState(window.innerWidth < 1000));

  const categoryTitle = subcategory.split('-');
  return (
      <Container className='mb-3'>
        {/* Products title */}
        <div className='d-flex pt-2 text-uppercase '>
          <h3 className='me-2 mb-0'>{categoryTitle[categoryTitle.length - 1]}</h3>
          <p className='ms-1'>{products.length} Items</p>
        </div>
        {/* Products title */}

        <hr className='mt-0'/>
        <Row className='mt-2'>
          <Col lg={3}>
            {showFilterState
              ? <div className='d-flex justify-content-center mb-2'>
                  <OffCanvas buttonText='Filter' title='Filters' body={<Filter/>}/>
                </div>
              : <Filter /> }
          </Col>
          <Col lg={9}>
            <Row>
              {loading || loading === undefined
                ? <Loading />
                : error
                  ? <Navigate to={'/404'}/>
                  : products.length === 0
                    ? <div className='text-center'>
                      <h3 >Sorry we could not find any product :(</h3>
                      <p>Try tweaking some of the filters :)</p>
                    </div>
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
