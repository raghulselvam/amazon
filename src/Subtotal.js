import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {getbaskettotal} from "./reducer"
import "./Subtotal.css"

function Subtotal() {
    const[{basket},dispatch]=useStateValue()
    return (
        <div className="subtotal">
             <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p>Subtotal({basket.length}items):<strong>{value}</strong>
                    </p>
                    <small className='subclass'>
                     
                     <input type='checkbox'/>This order contains a gift
                    </small>
                    </>
                    )}
                    
                  decimalScale={2}
                  value={getbaskettotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  />
             <button className="button">Proceed to chekout</button>
        </div>
    )
}

export default Subtotal
