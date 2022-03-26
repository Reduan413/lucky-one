import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart} = props;
    const {img, name, price} = product
    return (
        <div className = "card">
            <img src={img} alt="" />
            <div className = "card-info">
                <h4 className= "card-title">{name}</h4>
                <p>Price: {price}</p>
            </div>
            <button className="card-btn"
                onClick={() => handleAddToCart(product)}
            >
                <p className="btn-text">Add to cart</p>
                <FontAwesomeIcon icon={faCartPlus}/>
            </button>
        </div>
    );
};

export default Product;