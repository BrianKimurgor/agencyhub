/* eslint-disable no-unused-vars */
import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/companies">Companies</NavLink></li>
          <li><NavLink to="/branding">Branding</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/clients">Clients</NavLink></li>
          <li><NavLink to="/resource-allocation">Resource Allocation</NavLink></li>
          <li><NavLink to="/performance">Performance</NavLink></li>
          <li><NavLink to="/integrations">Integrations</NavLink></li>
          <li><NavLink to="/sub-agencies">Sub-Agencies</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
