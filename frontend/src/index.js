import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import store from './store';
import React from 'react';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
