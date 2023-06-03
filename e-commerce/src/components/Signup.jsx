import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export function Signup() {
  let navigate=useNavigate();

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [name,setname]=useState("");
  
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
            <form className='sign' action="" onSubmit={handlesubmit}>
              <label htmlFor="email"></label>
              <input type="email" id='email' name='email' placeholder='Email'   value={email} onChange={(e) => setemail(e.target.value)}/>

              <label htmlFor="password"></label>
              <input type="password" id='password' name='password'  value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password'/>
              
              <label htmlFor="name"></label>
              <input type="text" id='name' name='name'  value={name} onChange={(e) => setname(e.target.value)} placeholder='Name'/>
              
              <button  type='submit' className='bg-success sub'>Sign UP</button>
              <button className='link-btn' onClick={() => navigate('/login')} >already have an account? Log In</button>
          </form>

          
      

      </div>
    </div>
  )
}
