import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  return (
    // className use kiye
    <div className="app-container">
      <Header />
      <div className="content-wrapper"> 
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;