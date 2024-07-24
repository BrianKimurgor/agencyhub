/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './dashboard.css';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Performance',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#003366',
            tension: 0.1,
        },
    ],
};

const PerformanceMetrics = () => {
    return (
        <div className="widget performance-metrics">
            <h3>Performance Metrics</h3>
            <Line data={data} />
        </div>
    );
};

export default PerformanceMetrics;
