import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './LuckyItem.css'

const LuckyItem = (props) => {
    const{close,chooseProduct} = props;
    const {img, name} = chooseProduct;
  return (
    <div className="chooseCard">
      <img src={img} alt="" />
      <div className="chooseCard-info">
        <h4 className="chooseCard-title">{name}</h4>
      </div>
      <button className="chooseCard-btn" onClick={() => close()}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default LuckyItem;
