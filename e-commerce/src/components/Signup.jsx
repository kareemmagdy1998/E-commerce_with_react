import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, userExists, getAllUsers } from '../API/api_controller';

export function Signup() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    role: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
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
      case 'name':
        setFormErrors({
          ...formErrors,
          name: e.target.value.length < 3 ? 'Name must be at least 3 characters' : ''
        });
        break;
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

  const handlesubmit = async (e) => {
    e.preventDefault();

    // Check if there are any form errors before submitting the form
    if (Object.values(formErrors).every((val) => val === '')) {
      const users = await getAllUsers();
      console.log(users);

      // Check if the form values already exist in the database
      const userExistsValue = userExists(users, 'email', formValues);

      if (!userExistsValue) {
        // Register the user
        register(formValues);

        setFormValues({
          name: '',
          email: '',
          password: ''
        });

        e.target.reset();
      } else {
        // Display an error message to the user
        setFormValues({
          name: '',
          email: '',
          password: ''
        });

        e.target.reset();
        
        alert('A user with these details already exists try to log in ');
        
       
      }
    }
  };

  return (
    <div className="body">
      <div className="auth-form-container">
        <form className="sign" action="" onSubmit={handlesubmit}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={OperationHandler}
            required
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}

          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={OperationHandler}
            placeholder="Password"
            required
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}

          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" onChange={OperationHandler} placeholder="Name" required />
          {formErrors.name && <span className="error">{formErrors.name}</span>}

          <button type="submit" className="bg-success sub" disabled={!formValues.email}>
            Sign UP
          </button>
          <button className="link-btn" onClick={() => navigate('/login')}>
            already have an account? Log In
          </button>
        </form>
      </div>
    </div>
  );
}