/* eslint-disable no-unused-vars */
import React from 'react';
import './dashboard.css';

const Overview = () => {
    return (
        <div className="overview">
            <div className="overview-cards">
                <div className="card">
                    <h3>Total Projects</h3>
                    <p>120</p>
                </div>
                <div className="card">
                    <h3>Total Clients</h3>
                    <p>50</p>
                </div>
                <div className="card">
                    <h3>Revenue</h3>
                    <p>$500,000</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
