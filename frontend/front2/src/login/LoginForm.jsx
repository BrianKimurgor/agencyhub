/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <h1>Agencyhub</h1>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className='input'
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className='input'
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="primary-button">Login</button>
      <p>Login with</p>
      <h1>Google</h1>
      <p>
        Not a member yet? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
