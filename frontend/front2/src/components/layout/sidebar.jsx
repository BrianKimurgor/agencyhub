/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/projects/list">Projects</Link></li>
          <li><Link to="/clients/list">Clients</Link></li>
          <li><Link to="/branding/list">Branding</Link></li>
          <li><Link to="/resources/list">Resource Allocation</Link></li>
          <li><Link to="/integrations/list">Integrations</Link></li>
          <li><Link to="/performance/list">Performance</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
