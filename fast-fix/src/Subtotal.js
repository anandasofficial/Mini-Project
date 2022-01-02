import React from 'react'
import { Button } from "@material-ui/core";
import { useStateValue } from './StateProvider';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
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
              Subtotal ({basket?.length} items): <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button>Proceed</Button>
        </div>
    )
}

export default Subtotal