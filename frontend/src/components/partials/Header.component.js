import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import headerProperties from '../../resources/default/headerProperties';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const Header = () => {
  return (
    <>
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
              <LinkContainer to="/products">
                <Nav.Link>{headerProperties.productsBtn}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>{headerProperties.clothingBtn}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>{headerProperties.accessoriesBtn}</Nav.Link>
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

      <Navbar bg="light" className='p-1' expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="d-flex align-items-center">
              <img src="/logo192.png" className='pe-2' style={{ width: '50px' }}/>
              {headerProperties.brandBtn}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="secondNav" />
          <Navbar.Collapse id="secondNav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Men" id="menCategories">
                <LinkContainer to="/category/mens-clothing">
                  <NavDropdown.Item>{headerProperties.clothingBtn}</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category/mens-accessories">
                  <NavDropdown.Item>{headerProperties.accessoriesBtn}</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Women" id="womenCategories">
                <LinkContainer to="/category/womens-clothing">
                  <NavDropdown.Item>{headerProperties.clothingBtn}</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category/womens-jewelry">
                  <NavDropdown.Item>{headerProperties.jewelryBtn}</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category/womens-accessories">
                  <NavDropdown.Item>{headerProperties.accessoriesBtn}</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder={headerProperties.searchPlaceHolder}
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">{headerProperties.searchBtn}</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
  );
};

export default Header;
