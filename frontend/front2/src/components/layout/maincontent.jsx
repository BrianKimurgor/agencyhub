/* eslint-disable react/prop-types */
 /* eslint-disable no-unused-vars */
import React from 'react';
import './maincontent.css';

const MainContent = ({ children }) => {
  return (
    <main className="main-content">
      {children}
    </main>
  );
};

export default MainContent;
