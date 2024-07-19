/* eslint-disable no-unused-vars */
import React from 'react';
import './header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">AgencyHub</div>
      <nav>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/notifications">Notifications</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
