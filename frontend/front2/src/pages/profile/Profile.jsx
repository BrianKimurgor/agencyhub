/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ProfileDetails from './profileDetails';

import ProfileForm from './profileForm';
import './profile.css';

const Profile = () => {
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        // Fetch profile data here if needed
    }, []);

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    return (
        <div className="profile">
            <h1>Profile</h1>
            {editing ? (
                <ProfileForm onCancel={handleEditToggle} />
            ) : (
                <ProfileDetails onEdit={handleEditToggle} />
            )}
        </div>
    );
};

export default Profile;
