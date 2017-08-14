import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import GitList from './components/GitList'

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GitList />
  </Provider>,
  document.getElementById('root')
);
