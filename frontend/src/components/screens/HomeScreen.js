import Carousel from '../HomeCarousel.component.js';
import { Col, Row, Image } from 'react-bootstrap';
import React from 'react';

const HomeScreen = () => {
  return (
    <>
      <Carousel />
      <div className='text-center py-5'>
        <h4>Stay inspired with our collections this week</h4>
        <hr className='bg-success w-25 m-auto my-3' />
        <Row>
          <Col lg={3}></Col>
          <Col><p className='fs-6'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum</p></Col>
          <Col lg={3}></Col>
        </Row>
      </div>
      <Row>
        <Col lg={4} md={12}><Image fluid alt='Women Clothes' src='./images/frontPage/women-grid1.webp'/></Col>
        <Col lg={4} md={12}><Image fluid alt='Women Clothes' src='./images/frontPage/women-grid3.webp'/></Col>
        <Col lg={4} md={12}><Image fluid alt='Women Clothes' src='./images/frontPage/women-grid2.webp'/></Col>
      </Row>
    </>
  );
};

export default HomeScreen;
