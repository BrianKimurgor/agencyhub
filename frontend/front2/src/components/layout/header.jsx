/* eslint-disable no-unused-vars */
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">AgencyHub</div>
      <div className="header__profile">
        <span>User Profile</span>
        <button className="header__logout">Logout</button>
      </div>
    </header>
  );
};

export default Header;
