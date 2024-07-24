/* eslint-disable no-unused-vars */
import React from 'react';
import Overview from './overview';
import PerformanceMetrics from './perfomanceMetrics';
import RecentActivities from './recentActivities';
import Notifications from './notifications';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Overview />
            <div className="widgets">
                <PerformanceMetrics />
                <RecentActivities />
                <Notifications />
            </div>
        </div>
    );
};

export default Dashboard;
