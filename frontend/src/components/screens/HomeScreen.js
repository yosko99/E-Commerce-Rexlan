import homeProperties from '../../resources/default/screens/homeProperties.js';
import { Col, Row, Image, Button, Container } from 'react-bootstrap';
import ProductImage from '../ProductImage.component.js';
import { LinkContainer } from 'react-router-bootstrap';
import Carousel from '../HomeCarousel.component.js';
import React from 'react';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Carousel />

        {/* Stay inspired */}
        <div className='text-center py-5'>
          <p className='fs-5'>{homeProperties.stayInspiredTitle}</p>
          <hr className='bg-success w-25 m-auto my-3' />
          <Row>
            <Col lg={3}></Col>
            <Col><p>{homeProperties.stayInspiredCaption}</p></Col>
            <Col lg={3}></Col>
          </Row>
        </div>
        {/* Stay inspired */}

        {/* Women clothes */}
        <Row>
          <LinkContainer to="/category/womens-clothing" role="button">
            <Col lg={4} md={12}><Image fluid alt='Women Clothes' src='/images/frontPage/women-grid1.webp'/></Col>
          </LinkContainer>
          <LinkContainer to="/category/womens-clothing" role="button">
            <Col lg={4} md={12}><Image fluid alt='Women Clothes' src='/images/frontPage/women-grid3.webp'/></Col>
          </LinkContainer>
          <LinkContainer to="/category/womens-clothing" role="button">
            <Col lg={4} md={12}><Image fluid alt='Women Clothes' src='/images/frontPage/women-grid2.webp'/></Col>
          </LinkContainer>
        </Row>
        {/* Women clothes */}

        {/* Men accessories/clothes */}
        <Row className='pt-4'>
          <Col lg={6} md={12}>
            <LinkContainer to='/category/mens-accessories' role='button'>
              <Image fluid alt='Women Clothes' src='/images/frontPage/men-accessories.webp'/>
            </LinkContainer>
          </Col>
          <Col lg={6} md={12}>
            <LinkContainer to='/category/mens-clothing' role='button'>
              <Image fluid alt='Women Clothes' src='/images/frontPage/men-clothes.webp'/>
            </LinkContainer>
          </Col>
        </Row>
        {/* Men accessories/clothes */}

        {/* New arrivals */}
        <div className='text-center py-5'>
          <p className='fs-5'>{homeProperties.newArrivalsTitle}</p>
          <hr className='bg-success w-25 m-auto my-3' />
          <Row>
            <Col lg={3}></Col>
            <Col><p>{homeProperties.newArrivalsCaption}</p></Col>
            <Col lg={3}></Col>
          </Row>
        </div>
        <ProductImage />
        {/* New arrivals */}
      </Container>

      {/* Weekly promotions */}
      <div style={{ backgroundImage: 'url(https://cdn.shopify.com/s/files/1/2721/4382/files/vela-image2.jpg?v=1515581534)' }}>
        <Container>
          <Row className=''>
            <Col md={6} className='d-flex justify-content-center flex-column text-left'>
              <h4>{homeProperties.weeklyPromotionsTitle}</h4>
              <hr className='bg-success w-100'/>
              <p>{homeProperties.weeklyPromotionsCaption}</p>
              <Button className='text-uppercase btn-dark w-50'>{homeProperties.viewPromotionsBtn}</Button>
            </Col>
            <Col md={6}>
              <Image className='mb-4 pt-4' fluid src="/images/frontPage/weekly-promotions.webp" alt='Sitting woman'/>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Weekly promotions */}

      {/* Company logos */}
      <Container className='d-flex justify-content-center mt-5'>
        <Image fluid src="/images/frontPage/companies.webp" alt='company logos'/>
      </Container>
      {/* Company logos */}
    </>
  );
};

export default HomeScreen;
