import {combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'; 


import catagory from './categories';
import product from './products';
import cart from './cart';



let reducers = combineReducers({ catagory,product,cart });


const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
