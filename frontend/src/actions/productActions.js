import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_FILTERED_REQUEST,
  PRODUCT_LIST_FILTERED_SUCCESS,
  PRODUCT_LIST_FILTERED_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants';
import axios from 'axios';

export const productListAction = (qty) => async (dispatch) => {
  try {
    const quantity = (qty === undefined) ? '' : `/?qty=${qty}`;

    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`/api/products${quantity}`);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const productListFilteredAction = (subcategory, queries) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_FILTERED_REQUEST });
    const { data } = await axios.get(`/api/products/category/${subcategory}?${queries && queries}`);

    dispatch({
      type: PRODUCT_LIST_FILTERED_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FILTERED_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/id/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
