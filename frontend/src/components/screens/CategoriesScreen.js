import { categoryListAction } from '../../actions/categoryActions';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../Loading.component';
import React, { useEffect } from 'react';

const CategoriesScreen = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(categoryListAction(subcategory));
  }, [dispatch, subcategory]);

  return (
    <Container>
      {loading === undefined || loading
        ? <Loading />
        : error
          ? <h3>{error}</h3>
          : <div className='pt-2'>
              <h4>{categories.page_title}</h4>
              <p>{categories.page_description}</p>
              <Image fluid src={'/images/' + categories.image} alt={categories.id}/>
              <Row className='my-2'>
                {categories.categories.map((category, index) => (
                  <Col key={index + 1} md={12} lg={6} className='my-2'>
                      <p className='mt-3 fs-5'>{category.page_title}</p>
                      <LinkContainer to={'/products/' + category.id} role='button'>
                        <Image fluid src={'/images/' + category.image} alt={category.id} />
                      </LinkContainer>
                    </Col>
                ))}
              </Row>
          </div>}
    </Container>
  );
};

export default CategoriesScreen;
