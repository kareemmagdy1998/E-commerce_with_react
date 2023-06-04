import React from 'react'
import { useState } from 'react'
import "../css/login.css";
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export function Login() {

    let navigate=useNavigate();

    
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  const OperationHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });

    // Perform validation on the input field
    switch (e.target.name) {
      case 'email':
        setFormErrors({
          ...formErrors,
          email: /^\S+@\S+\.\S+$/.test(e.target.value) ? '' : 'Invalid email address'
        });
        break;
      case 'password':
        setFormErrors({
          ...formErrors,
          password: e.target.value.length < 6 ? 'Password must be at least 6 characters' : ''
        });
        break;
      default:
        break;
    }
  };

   


  return (
    <div className='body'>
        <div className='auth-form-container'>
        <form className='login center' action="" >
            <label htmlFor="email"></label>
            <input type="email" id='email' name='email' placeholder='Email'    onChange={OperationHandler}/>

            <label htmlFor="password"></label>
            <input type="password" id='password' name='password' placeholder='Password'   onChange={OperationHandler}/>
            <button type='submit' className='bg-success sub'> Log in </button>
           <button className='link-btn ' onClick={() =>navigate('/signup')} >Do not have Account? Sign UP</button> 
        </form>
      
        </div>
    </div>
  )
}
