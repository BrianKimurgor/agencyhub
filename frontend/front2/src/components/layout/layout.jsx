/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
