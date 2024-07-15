/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import mobile from '../../public/mobile.avif';
import LoginForm from '../login/LoginForm';

const API_URL = 'http://localhost:5000/api/auth/login';

const LoginGrid = () => {
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const onLogin = async (data) => {
    try {
      const response = await axios.post(API_URL, data);
      console.log('Login successful:', response.data);
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
