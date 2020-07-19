import React from 'react';
import './stylesheets/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText={(value) =>(
                 <>
                 <p>
                     Subtotal  ({basket.length}  items) :  
                      <strong>{`${value}`}</strong>
                 </p>
                 <small className="subtotal__gift">
                     <input type="checkbox"/> This order contains a gift
                 </small>
                 </> 
              )}
              displayType={"text"}
              value={getBasketTotal(basket)}
              thousandSeparator={true}
              prefix={" Ksh "}
            />
           <button >Proceed to Checkout</button>    
        </div>
    )
}

export default Subtotal;
