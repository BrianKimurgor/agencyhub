/* eslint-disable no-unused-vars */
import axios from 'axios';
import RegisterForm from '../login/RegistrationForm';
import { useState } from 'react';
import mobile from '../../public/mobile.avif'
import './loginservice.css'

const API_URL = 'http://localhost:5000/api/auth/register';

const RegisterGrid = () => {
  const [error, setError] = useState('');
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const onRegister = async (data) => {
    try {
      const response = await axios.post(API_URL, data)
      .catch(error => {
        setError(error.message)
    })
      console.log('Registration successful:');
    } catch (err) {
      console.error('Error registering user:', err);
      setError(err.message);
    }
  };

  return (
    <div className='registerservice'>
      {error && <p className="error-message">{error}</p>}
      <RegisterForm onRegister={(data) => onRegister(data)} />
    </div>
  );
};

export default RegisterGrid;
