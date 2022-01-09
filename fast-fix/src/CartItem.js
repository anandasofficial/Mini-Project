import React from "react";
import "./CartItem.css";
import { useStateValue } from "./StateProvider";

function CartItem({ id,src, title, description, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
      dispatch({
          type: 'REMOVE_FROM_CART',
          id: id,
          
      })
  };
  
  return (
    <div className="cart_item">
      <img className="cartItem_image" src={src} />
      <div className="cartItem_info">
        <p className="cartItem_title">{title}</p>
        <p className="cartItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={removeFromCart}>Remove from Cart</button>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CartItem;