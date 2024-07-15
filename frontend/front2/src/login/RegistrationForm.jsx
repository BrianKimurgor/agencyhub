/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../components/auth/auth.css';

const RegisterForm = ({ onRegister }) => {
    const [person, setPerson] = useState({
        name:"",
        email:"",
        password:"",
        role:""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(person);
    };



    return (
        <form onSubmit={handleSubmit} className="auth-form">
        <h1>Register</h1>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    name='name'
                    value={person.name}
                    onChange={(e) => setPerson({...person, name: e.target.value})}
                    required
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name='email'
                    value={person.email}
                    onChange={(e) => setPerson({...person, email: e.target.value})}
                    required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    name='password'
                    value={person.password}
                    onChange={(e) => setPerson({...person, password: e.target.value})}
                    required
                />
            </div>
            <div className="form-group">
                <label>Role:</label>
                <input
                    type="text"
                    name='role'
                    value={person.role}
                    onChange={(e) => setPerson({...person, role: e.target.value})}
                    required
                />
            </div>
            <button type="submit" className="primary-button">Register</button>
        </form>
    );
};

export default RegisterForm;
