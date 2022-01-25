import { CAROUSEL_LIST_REQUEST, CAROUSEL_LIST_SUCCESS, CAROUSEL_LIST_FAIL } from '../constants/carouselConstants';
import axios from 'axios';

export const carouselItemsAction = () => async (dispatch) => {
  try {
    dispatch({ type: CAROUSEL_LIST_REQUEST });
    const { data } = await axios.get('/api/carousel');

    dispatch({
      type: CAROUSEL_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CAROUSEL_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
