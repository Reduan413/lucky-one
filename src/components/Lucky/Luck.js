import {faShuffle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Luck.css";

const Luck = () => {
  const [products, setprocucts] = useState([]);
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setprocucts(data));
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...carts, product];
    setCart(newCart);
  };
  console.log(carts);
  return (
    <div className="luck-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <div className="carts">
          <h2>Selected Laptop</h2>
          {carts.map((cart) => (
            <Cart cart={cart}></Cart>
          ))}
          <button className="choose-btn">
            <p className="btn-text">Choose One</p>
            <FontAwesomeIcon icon={faShuffle} />
          </button>
          <button className="remove-btn">
            <p className="btn-text">Remove All</p>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Luck;
