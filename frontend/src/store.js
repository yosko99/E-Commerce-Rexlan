import { createStore, combineReducers, applyMiddleware } from 'redux';
import { carouselListReducer } from './reducers/carouselReducers';
import { productListReducer } from './reducers/productReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  carouselItems: carouselListReducer,
  productList: productListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
