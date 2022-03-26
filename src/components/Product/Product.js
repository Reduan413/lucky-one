import React from 'react';

const Product = (props) => {
    const {img, name, price} = props.product
    return (
        <div className = 'card'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Price: {price}</p>
            </div>
            <button>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;