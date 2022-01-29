import { productDetailsAction } from '../../actions/productActions';
import ProductDetails from '../product/ProductDetails.component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import Product from '../product/Product.component';
import { Container } from 'react-bootstrap';
import Loading from '../Loading.component';
import React, { useEffect } from 'react';

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [dispatch, id]);

  return (
      <Container>
        {loading === undefined || loading
          ? <Loading />
          : error
            ? <Navigate to={'/404'}/>
            : <Product product={product} ProductComponent={ProductDetails}/>
            }
      </Container>
  );
};

export default ProductDetailsScreen;
