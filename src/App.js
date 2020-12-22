import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import Header from "./Header"
import Home from "./Home"
import React, { useEffect } from "react"
import Checkout from "./Checkout"
import Login from "./login"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const[{user},dispatch]=useStateValue();
   useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          types:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
          types:"SET_USER",
          user:null
        })
      }
      
    })
    
  },[dispatch])

  console.log(user)
  return (
   <Router>
    <div className="app">
       
      <Switch>
        
        <Route path="/checkout">
            <Header/>
            <Checkout/>
            
        </Route>
        
            <Route  path="/login">
               <Login/>
       
            </Route>
        
        <Route path="/">
            <Header/>
            <Home/>
        </Route>
      </Switch>
      
       </div>
    </Router>
  );
}

export default App;
