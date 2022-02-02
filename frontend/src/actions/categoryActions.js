import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
  SUBCATEGORY_LIST_FAIL
} from '../constants/categoryConstants';
import axios from 'axios';

export const categoryListAction = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get('/api/category/');

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const subcategoryListAction = (subcategory) => async (dispatch) => {
  try {
    dispatch({ type: SUBCATEGORY_LIST_REQUEST });
    const category = (subcategory === undefined) ? '' : subcategory;
    const { data } = await axios.get(`/api/category/${category}`);

    dispatch({
      type: SUBCATEGORY_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
