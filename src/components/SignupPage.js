import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Check password length
    return password.length >= 6;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    const newErrors = { email: '', password: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }
    setErrors(newErrors);

    if (isValid) {
      // Proceed with form submission or further processing
      console.log('Form submitted');
    }
    try {
      await axios.post('http://localhost:5000/api/auth/register', { email, password });
      navigate('/login');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div class="mt-5">
      <h1>SIGNUP</h1>
    <form onSubmit={handleSubmit} >
    <div class="form-group bg-secondary">
      <label  class="p-3" for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)}  required  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
    </div>
    <div class="form-group bg-secondary">
      <label class="p-3" for="exampleInputPassword1">Password</label>
      <input type="password"onChange={(e) => setPassword(e.target.value)}  class="form-control"  required  id="exampleInputPassword1" placeholder="Password"/>
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input p-3 mt-2" id="exampleCheck1"/>
      <label class="form-check-label p-3" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  );
};

export default SignupPage;
