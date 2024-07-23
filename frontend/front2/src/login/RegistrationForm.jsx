/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/auth/auth.css';

const RegisterForm = ({ onRegister }) => {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(person);
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h1>Register</h1>
            <div className="form-group">
                <input
                    type="text"
                    name='name'
                    placeholder='Name'
                    value={person.name}
                    onChange={(e) => setPerson({ ...person, name: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name='email'
                    placeholder='Email'
                    value={person.email}
                    onChange={(e) => setPerson({ ...person, email: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={person.password}
                    onChange={(e) => setPerson({ ...person, password: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name='role'
                    placeholder='role'
                    value={person.role}
                    onChange={(e) => setPerson({ ...person, role: e.target.value })}
                    required
                />
            </div>
            <button type="submit" className="primary-button">Register</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default RegisterForm;
