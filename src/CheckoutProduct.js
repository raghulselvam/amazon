import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const remove_basket=()=>{
          dispatch({
              id:id,
              types:"REMOVE_BASKET"

          })
    }
    return (
        <div className="checkoutproduct">
            <img  className="product_image"src={image} alt=""/>
            <div className="product_info">
               <p className="product_title"> {title}</p>
               <p className="product_price">
                  <strong>$</strong>
                  <strong>{price}</strong>
              </p>
            <div className="rating">
                { Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>*</p>
                    ))}
            </div>
            <button onClick={remove_basket} className="button">Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
