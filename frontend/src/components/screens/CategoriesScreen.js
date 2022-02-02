import { subcategoryListAction } from '../../actions/categoryActions';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import CategoryBar from '../CategoryBar.component';
import Loading from '../Loading.component';
import React, { useEffect } from 'react';

const CategoriesScreen = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.subcategoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(subcategoryListAction(subcategory));
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
                      <CategoryBar category={category} />
                    </Col>
                ))}
              </Row>
          </div>}
    </Container>
  );
};

export default CategoriesScreen;
