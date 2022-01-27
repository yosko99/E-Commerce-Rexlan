import screen404 from '../../resources/default/screens/404Properties';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Button } from 'react-bootstrap';
import React from 'react';

const Screen404 = () => {
  return (
    <Container className='text-center pt-3'>
      <h1>{screen404.error}</h1>
      <LinkContainer to='/'>
        <Button className='bg-dark fs-5'>{screen404.homeBtn}</Button>
      </LinkContainer>
    </Container>
  );
};

export default Screen404;
