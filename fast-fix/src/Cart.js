import React from "react";
import "./Cart.css";
import Subtotal from "./Subtotal";
function Cart() {
  return (
    <div className="cart">
      <div className="cart_left">
      <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

      </div>
      <div>
      <h2 className="checkout__title">Your shopping Basket</h2>
        {/* CartItem */ }
      </div>
      <div className='cart_right'>
          <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
