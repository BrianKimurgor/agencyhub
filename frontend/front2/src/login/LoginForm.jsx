/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../components/auth/auth.css';

const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(loginData);
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name='email'
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name='password'
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="primary-button">Login</button>
    </form>
  );
};

export default LoginForm;
