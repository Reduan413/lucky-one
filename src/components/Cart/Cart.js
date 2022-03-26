import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const {img, name} = props.cart;
  return (
    <div className="cart">
      <div className="cart-card">
        <div className="cart-img">
          <img
            src={img}
            alt=""
          />
        </div>
        <div className="cart-title">
          <p>{name}</p>
        </div>
        <div className="cart-btn">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
