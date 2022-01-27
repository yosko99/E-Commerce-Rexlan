import { carouselItemsAction } from '../actions/carouselActions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Loading from './Loading.component';
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
        ? <Loading />
        : error
          ? <Navigate to={'/404'}/>
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
