/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './profile.css';

const ProfileForm = ({ onCancel }) => {
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Administrator',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Profile updated:', formData);
        onCancel(); // Go back to the details view after submission
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Role:</label>
                <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="submit-button">Save</button>
            <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default ProfileForm;
