import React from 'react';
import Catagory from './components/storefront/categories';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Product from './components/storefront/products';
import SimpleCart from './components/cart/simplecart';
import './style.scss';
export default props => {
    return (
        <>
        <Header />
        <SimpleCart />
        <Catagory />
         <Product /> 
            <Footer />
        </>
    )
};