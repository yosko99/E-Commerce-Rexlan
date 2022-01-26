import { carouselItemsAction } from '../actions/carouselActions';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Spinner } from 'react-bootstrap';
import React, { useEffect } from 'react';

const HomeCarousel = () => {
  const dispatch = useDispatch();

  const carouselList = useSelector((state) => state.carouselItems);
  const { loading, carouselItems, error } = carouselList;

  useEffect(() => {
    dispatch(carouselItemsAction());
  }, [dispatch]);

  return (
    <Carousel className='pt-2'>
      {loading
        ? <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
      </div>
        : error
          ? <h3>{error}</h3>
          : carouselItems.map((item, index) => (
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

export default HomeCarousel;
