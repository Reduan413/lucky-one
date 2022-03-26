import { faShuffle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import LuckyItem from "../LuckItem/LuckyItem";
import Product from "../Product/Product";
import "./Luck.css";

const Luck = () => {
  const [products, setprocucts] = useState([]);
  const [carts, setCart] = useState([]);
  const [chooseProduct, sethooseProduct] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setprocucts(data));
  }, []);
  const handleAddToCart = (selectedProduct) => {
    if (carts.length <= 3) {
      let newCart = [];
      const exists = carts.find((product) => product.id === selectedProduct.id);
      if (!exists) {
        newCart = [...carts, selectedProduct];
      } else {
        alert("This Product has already been selected");
        newCart = [...carts];
      }

      setCart(newCart);
    } else {
      alert("You selected maximum 4 products");
    }
  };
  //handle choose product
  const handleChooseOne = (carts) => {
    const cartLength = carts.length;
    if (cartLength > 0) {
      let randomNum = Math.floor(Math.random() * cartLength);
      const choose = carts[randomNum];
      sethooseProduct(choose);
      toggle();
    }
  };
  //handle delete individual product
  const handleDeleteProduct = (id) => {
    const temp = [...carts];
    temp.splice(id, 1);
    setCart(temp);
  };

  //handle delete all products
  const handleDeleteAll = () => {
    const cartLength = carts.length;
    if (cartLength > 0) {
      setCart([]);
      sethooseProduct([]);
      setShow(false);
    }
  };
  //handle show
  const toggle = () => setShow(!show);

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
            <Cart
              key={cart.id}
              cart={cart}
              handleDeleteProduct={handleDeleteProduct}
            ></Cart>
          ))}
          <button className="choose-btn" onClick={() => handleChooseOne(carts)}>
            <p className="btn-text">Choose One</p>
            <FontAwesomeIcon icon={faShuffle} />
          </button>
          <button className="remove-btn" onClick={() => handleDeleteAll()}>
            <p className="btn-text">Choose Again</p>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          {show ? (
            <div className="choose">
              <h2>Your choose Laptop</h2>
              <LuckyItem
                key={chooseProduct?.id}
                chooseProduct={chooseProduct}
                close={toggle}
              ></LuckyItem>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Luck;
