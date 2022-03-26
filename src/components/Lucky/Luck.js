import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Luck.css'

const Luck = () => {
    const [products, setprocucts] = useState([]);
    useEffect(() =>{
        fetch("products.json")
        .then((res) => res.json())
        .then((data) => setprocucts(data));
    },[])
    return (
        <div className="luck-container">
            <div className="products-container">
                {
                    products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Luck;