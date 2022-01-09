import React from 'react'
import { Button } from "@material-ui/core";
import { useStateValue } from './StateProvider';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{ basket } , dispatch] = useStateValue();

    return (
        <div className='subtotal'>
           
             <CurrencyFormat
        renderText={(value) => (
          <>
          <h5>Price Details</h5>
          <h2>              Subtotal ({basket?.length} items): <strong>{value}</strong>
</h2>
          <p>              Subtotal ({basket?.length} items): <strong>{value}</strong>
</p>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button>Proceed</Button> 
        </div>
    )
}

export default Subtotal;