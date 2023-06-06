import React from 'react';
import { useState } from 'react';
import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import { userLogin ,getAllUsers,loggedUser} from '../API/api_controller';
import { useDispatch, useSelector } from 'react-redux';
import { set_user } from '../actions';

export function Login() {
  const navigate = useNavigate();
  let dispatch = useDispatch()
  let user = JSON.parse(localStorage.getItem('token'));
  console.log(user);
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });



  const handleChange = (e) => {
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const users = await getAllUsers();
      const userExist=userLogin(user,"email","password",formValues);

      if (userExist) {
        
       const currentUser = loggedUser(user,"email","password",formValues);
       
       localStorage.setItem('token', JSON.stringify(currentUser));
       dispatch(set_user(currentUser));
        navigate('/products');
     }

     else{
      setFormValues({
        email: '',
        password: ''
      });

      e.target.reset();

      alert('Envalid email or password');
     }

}

  return (
    <div className='body'>
      <div className='auth-form-container'>
        <form className='login center' onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input type="email" id='email' name='email' placeholder='Email' value={formValues.email} onChange={handleChange} />
          {formErrors.email && <span className="error">{formErrors.email}</span>}

          <label htmlFor="password"></label>
          <input type="password" id='password' name='password' placeholder='Password' value={formValues.password} onChange={handleChange} />
          {formErrors.password && <span className="error">{formErrors.password}</span>}

          <button type='submit' className='bg-success sub'>Log in</button>
          <button className='link-btn' onClick={() => navigate('/signup')}>Do not have Account? Sign UP</button>
        </form>
      </div>

    </div>
  );
}