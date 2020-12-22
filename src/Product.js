import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,price,rating,image}) {
    const[{basket},dispatch]=useStateValue()
    const addbusket=(event)=>{
        event.preventDefault()
         dispatch({
             types:"ADD_TO_BASKET",
             items:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price,
             }
         })
    }
    
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
         
            </p>
            <div className="rating">
                {Array(rating).fill().map((_)=>(
                    <p>*</p>
                ))}
            </div>
            </div>
            <img src={image} alt=""/>
            <button  onClick={addbusket}>Add to basket</button>
            
        </div>
    )
}

export default Product
