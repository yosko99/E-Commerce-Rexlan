import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const HomeCarousel = ({ carouselItems }) => {
  return (
    <Carousel className='pt-2'>
      {carouselItems.map((item, index) => (
          <Carousel.Item key={index + 1}>
            <img
            className="d-block w-100"
            src={item.image}
            alt={item.carousel_title}
            />
            <Carousel.Caption>
              {/* <h5>{item.carousel_title}</h5> */}
              {/* <p>{item.carousel_caption}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  );
};

HomeCarousel.propTypes = {
  carouselItems: PropTypes.array.isRequired
};

export default HomeCarousel;
