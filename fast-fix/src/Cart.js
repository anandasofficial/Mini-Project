import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Cart() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="cart">

      <div className="cart_left">

      </div>

      <div>
        <div>
        <h2 className="cart_title">Your shopping Basket</h2>

          <h3>{user?.email}</h3>

        </div>
        {basket.map((item) => (
          <CartItem
            /* src="https://st2.depositphotos.com/1010613/6332/i/950/depositphotos_63322175-stock-photo-repairer-repairing-air-conditioner.jpg"
            title="AC Services"
            description="Unique activities we can do together, led by a world of hosts."
            price={199.90}*/
            id={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <div className="cart_right">
      </div>

    </div>
  );
}

export default Cart;
