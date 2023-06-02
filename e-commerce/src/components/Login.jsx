import React from 'react'
import { useState } from 'react'
import "../css/login.css";
import {NavLink} from 'react-router-dom'

export function Login() {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        setpassword("");
        setemail("");
    };



  return (
    <div className='body'>
        <div className='auth-form-container'>
        <form className='login center' action="" onSubmit={handlesubmit}>
            <label htmlFor="email"></label>
            <input type="email" id='email' name='email' placeholder='Email'   value={email} onChange={(e) => setemail(e.target.value)}/>

            <label htmlFor="password"></label>
            <input type="password" id='password' name='password' placeholder='Password'  value={password} onChange={(e) => setpassword(e.target.value)}/>
            <button type='submit' className='bg-success sub'> Log in </button>
           <NavLink to=""><button className='link-btn ' >Do not have Account? Sign UP</button></NavLink> 
        </form>
      
        </div>
    </div>
  )
}
