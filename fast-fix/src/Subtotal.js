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
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
         
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

export default Subtotal
