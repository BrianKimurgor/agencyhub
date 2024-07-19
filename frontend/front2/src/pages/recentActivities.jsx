/* eslint-disable no-unused-vars */
import React from 'react';
import './dashboard.css';

const RecentActivities = () => {
    const activities = [
        { id: 1, text: 'Project one completed successfully' },
        { id: 2, text: 'New client added: Company Y' },
        { id: 3, text: 'Revenue milestone achieved' },
    ];

    return (
        <div className="widget recent-activities">
            <h3>Recent Tasks</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivities;
