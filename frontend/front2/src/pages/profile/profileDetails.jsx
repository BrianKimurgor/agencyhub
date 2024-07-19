/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './profile.css';

const ProfileDetails = ({ onEdit }) => {
    // Example profile data; in practice, fetch this from an API or state
    const profileData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Administrator',
        joined: 'January 1, 2023',
    };

    return (
        <div className="profile-details">
            <div className="detail">
                <span className="label">Name:</span>
                <span className="value">{profileData.name}</span>
            </div>
            <div className="detail">
                <span className="label">Email:</span>
                <span className="value">{profileData.email}</span>
            </div>
            <div className="detail">
                <span className="label">Role:</span>
                <span className="value">{profileData.role}</span>
            </div>
            <div className="detail">
                <span className="label">Joined:</span>
                <span className="value">{profileData.joined}</span>
            </div>
            <button className="edit-button" onClick={onEdit}>Edit Profile</button>
        </div>
    );
};

export default ProfileDetails;
