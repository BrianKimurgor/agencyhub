/* eslint-disable no-unused-vars */
import React from 'react';
import './dashboard.css';

const Notifications = () => {
    const notifications = [
        { id: 1, text: 'System maintenance scheduled for tonight' },
        { id: 2, text: 'New update available for the project management tool' },
    ];

    return (
        <div className="widget notifications">
            <h3>Notifications</h3>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
