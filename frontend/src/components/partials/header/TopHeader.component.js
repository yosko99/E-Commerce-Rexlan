import headerProperties from '../../../resources/default/headerProperties';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const FirstHeader = () => {
  return (
    <Navbar bg="black" variant="dark" className='p-1' expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="topNavbar" />
      <Navbar.Collapse id="topNavbar">
        <Nav
          className="me-auto my-lg-0"
          navbarScroll
        >
          <LinkContainer to="/">
            <Nav.Link>{headerProperties.homeBtn}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/category/mens-clothing">
            <Nav.Link>{headerProperties.menClothingBtn}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/category/womens-clothing">
            <Nav.Link>{headerProperties.womenClothingBtn}</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/store" className='square border-end'>
            <Nav.Link>
              <span><i style={{ color: 'white' }} className="fas fa-map-marker-alt"></i>  </span>
              {headerProperties.storeBtn}
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login" className='square border-end'>
            <Nav.Link>{headerProperties.loginBtn}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/order-status" className='square border-end'>
            <Nav.Link>{headerProperties.orderStatusBtn}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              <span><i style={{ color: 'white' }} className="fas fa-shopping-cart"></i>  </span>
              {headerProperties.cartBtn}
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default FirstHeader;
