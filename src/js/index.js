import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import promise from 'redux-promise'

import reducers from './reducers';
import { fromLocalStorage } from './actions/index'

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = createBrowserHistory();

if(localStorage.jakkardUserInfo) {
  store.dispatch(fromLocalStorage(localStorage.jakkardUserInfo));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
