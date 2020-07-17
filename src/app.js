import React from 'react';
import Catagory from './components/storefront/categories';
// import Status from './components/status.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Product from './components/storefront/products';
import './style.scss';
export default props => {
    return (
        <>
        <Header />
        <Catagory />
         <Product /> 
            <Footer />
        </>
    )
};