import { CAROUSEL_LIST_REQUEST, CAROUSEL_LIST_SUCCESS, CAROUSEL_LIST_FAIL } from '../constants/carouselConstants';

export const carouselListReducer = (state = { carouselItems: [] }, action) => {
  switch (action.type) {
    case CAROUSEL_LIST_REQUEST:
      return { loading: true, carouselItems: [] };
    case CAROUSEL_LIST_SUCCESS:
      return { loading: false, carouselItems: action.payload };
    case CAROUSEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
