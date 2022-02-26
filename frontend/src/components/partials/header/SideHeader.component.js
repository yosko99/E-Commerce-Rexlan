import { Navbar, Container, Nav, Image, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import headerProperties from '../../../resources/default/headerProperties';
import { LinkContainer } from 'react-router-bootstrap';
import React, { useState } from 'react';

const SideHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand={false}>
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand className="d-flex align-items-center">
          <Image src="/logo192.png" className='pe-2' style={{ width: '50px' }}/>
          {headerProperties.brandBtn}
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow}/>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        show={show} onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">{headerProperties.menuText}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3 mb-2">
            <NavDropdown title={headerProperties.menText} id="menCategories">
              <LinkContainer to="/category/mens-clothing">
                <NavDropdown.Item onClick={handleClose}>{headerProperties.clothingBtn}</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/mens-accessories">
                <NavDropdown.Item onClick={handleClose}>{headerProperties.accessoriesBtn}</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title={headerProperties.womenText} id="womenCategories">
              <LinkContainer to="/category/womens-clothing">
                <NavDropdown.Item onClick={handleClose}>{headerProperties.clothingBtn}</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/womens-jewelry">
                <NavDropdown.Item onClick={handleClose}>{headerProperties.jewelryBtn}</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/womens-accessories">
                <NavDropdown.Item onClick={handleClose}>{headerProperties.accessoriesBtn}</NavDropdown.Item>
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
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
};

export default SideHeader;
