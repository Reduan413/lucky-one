import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Luck.css'

const Luck = () => {
    return (
        <div className="luck-container">
            <div className="products-container">
                <Product></Product>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Luck;