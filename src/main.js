import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Lines 5 and 6 accomplish the same thing
// import ReactDom from 'react-dom';
import { render as renderDom } from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import categories from './reducer/category';
import expenses from './reducer/expense';
import './style/main.scss';

// Setup combined reducer
const reducer = combineReducers({ categories, expenses });

// Setting up the Redux store here
const middleware = {};

// this if function composition
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

const root = document.createElement('div');
document.body.appendChild(root);

renderDom(<Provider store={store}><App /></Provider>, root);
