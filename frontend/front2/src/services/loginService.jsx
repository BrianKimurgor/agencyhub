/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import LoginForm from '../login/LoginForm';
import './loginservice.css'

const API_URL = 'http://localhost:5000/api/auth/login';

const LoginGrid = () => {
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Initialize navigate

  const onLogin = async (data) => {
    try {
      const response = await axios.post(API_URL, data);
      console.log('Login successful:', response.data);

      // Save token to localStorage or context if needed
      localStorage.setItem('token', response.data.token);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Error logging in user:', err);
      setError(err.message);
    }
  };

  return (
    <div className='loginservice'>
      {error && <p className="error-message">{error}</p>}
      <LoginForm onLogin={(data) => onLogin(data)} />
    </div>
  );
}

export default LoginGrid;
