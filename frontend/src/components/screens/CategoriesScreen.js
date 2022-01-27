import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React from 'react';

const CategoriesScreen = () => {
  const { subcategory } = useParams();
  return (
    <Container>
        {subcategory}
    </Container>
  );
};

export default CategoriesScreen;
