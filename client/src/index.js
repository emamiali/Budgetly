import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './components/App'
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root'));
