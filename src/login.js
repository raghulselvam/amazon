import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from './firebase'
import "./login.css"


function Login() {
    const history=useHistory()
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const logIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
            history.push("/")
        })
        .catch((e)=>alert(e.message));
    }
    const register=(e)=>{
       e.preventDefault()
       auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
           history.push('/')
       })
       .catch((e)=>alert(e.message)); 
       
    }
    return (
        <div className="login_page">
            <img className='login_image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""/>
            <form className="login_register">
                <h5>Email</h5>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </form>
            <button onClick={logIn}>login</button>
            <p className="login_terms">By signing in you agree to Amazon's conditions of Use & sale.Please see our Privacy Notice,our Cookies Notice and our Interest-Based Ads Notice</p>
            <button  type='submit'className='registerbutton' onClick={register}>Create your Amazon account</button>
        </div>
    )
}

export default Login
