import categoriesProperties from '../resources/default/screens/categoriesProperties';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const CategoryBar = ({ category }) => {
  return (
      <>
        <p className='fs-5'>{category.page_title}</p>
        <div className='d-flex justify-content-center'>
            <Image fluid src={'/images/' + category.image} alt={category.id} />
        </div>
        <p className='mt-3'>{category.page_description}</p>
        <LinkContainer to={'/products/category/' + category.id} role='button'>
            <Button variant="info" style={{ fontSize: '1.2em' }}>{categoriesProperties.categoryBtn}</Button>
        </LinkContainer>
        <hr className='bg-success'/>
    </>
  );
};

CategoryBar.propTypes = {
  category: PropTypes.object.isRequired
};

export default CategoryBar;
