import React from 'react';
import { Header } from './Header';
import Sidebar from './Sidebar';
import { MainContent } from './MainContent';
import { Footer } from './Footer';


export const AdminDashboard = () => {
  return (
    <div>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <MainContent />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
