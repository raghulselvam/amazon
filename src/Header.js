import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import {auth} from "./firebase"


function Header() {
    const[{basket,user}]=useStateValue()
    console.log(basket.length)
    const logout=()=>{
           if(user){
               auth.signOut();
           }
    }
    return (
        <nav className="app_header">
        
          <div className="header_leftside">
              <Link to="/">
              <img  className="header_logo"src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
              </Link>
              <LocationOnIcon className="location_icon"/>
              <div className="header_info">
                  <p>Hello</p>
                  <h3>Select your address</h3>
                  
              </div>
          </div>
          <div className="header_center">
                <input className="input_box" type="text" />
                <SearchIcon/>
          </div>
          <div className="header_right">
              <Link to={!user && "/login"} className="logins" >
                 <div onClick={logout}className="items">
                   <p>Hello,{user?.email}</p>
                   <h4>{user?'Sign Out':'Sign In'}</h4>
                 </div>
              </Link>
          
               <div className="first_item">
                   <p>Returns</p>
                   <h4>& Orders</h4>
               </div>
               <Link className="checkout_page" to="/checkout">
                  <div className="second_item">
                     <ShoppingBasketIcon/>
                     <span >{basket?.length}</span>
                  </div> 
                </Link>
          </div>
        </nav>
    )
}

export default Header
