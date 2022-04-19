import React from 'react';
import { DHeader } from './DHeader';
import DSidebar from './DSidebar';
import { DMainContent } from './DMainContent';
import { DFooter } from './DFooter';


export const DeveloperDashboard = () => {
  return (
    <div>
      <div id="wrapper">
        <DSidebar></DSidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <DHeader />
            <DMainContent />
          </div>
          <DFooter />
        </div>
      </div>
    </div>
  )
}
