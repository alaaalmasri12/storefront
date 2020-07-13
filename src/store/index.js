import {combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'; 


import catagory from './categories';


let reducers = combineReducers({ catagory });


const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
