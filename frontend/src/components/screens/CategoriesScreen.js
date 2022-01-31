import categoriesProperties from '../../resources/default/screens/categoriesProperties';
import { categoryListAction } from '../../actions/categoryActions';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams, Navigate } from 'react-router-dom';
import Loading from '../Loading.component';
import React, { useEffect } from 'react';

const CategoriesScreen = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(categoryListAction(subcategory));
  }, [dispatch, subcategory]);

  return (
    <Container>
      {loading === undefined || loading
        ? <Loading />
        : error
          ? <Navigate to={'/404'}/>
          : <div className='my-4'>
              <h4 className='text-center'>{categories.page_title}</h4>
              <p className='text-center'>{categories.page_description}</p>
              <Image className='mb-4' fluid src={'/images/' + categories.image} alt={categories.id}/>
              <Row className='my-2'>
                {categories.categories.map((category, index) => (
                  <Col key={index + 1} lg={12} className='my-2'>
                      <p className='fs-5'>{category.page_title}</p>
                      <div className='d-flex justify-content-center'>
                        <Image fluid src={'/images/' + category.image} alt={category.id} />
                      </div>
                      <p className='mt-3'>{category.page_description}</p>
                      <LinkContainer to={'/products/category/' + category.id} role='button'>
                        <Button variant="info" style={{ fontSize: '1.2em' }}>{categoriesProperties.categoryBtn}</Button>
                      </LinkContainer>
                      <hr className='bg-success'/>
                    </Col>
                ))}
              </Row>
          </div>}
    </Container>
  );
};

export default CategoriesScreen;
