import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_FILTERED_REQUEST,
  PRODUCT_LIST_FILTERED_SUCCESS,
  PRODUCT_LIST_FILTERED_FAIL
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productListFilteredReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FILTERED_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_FILTERED_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FILTERED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
