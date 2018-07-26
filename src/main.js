import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { render as renderDom } from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger';
import App from './components/app/app';
import categories from './reducer/category';
import expenses from './reducer/expense';
import './style/main.scss';

// Setup combined reducer
const reducer = combineReducers({ categories, expenses });

// this if function composition
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

const root = document.createElement('div');
document.body.appendChild(root);

renderDom(<Provider store={store}><App /></Provider>, root);
