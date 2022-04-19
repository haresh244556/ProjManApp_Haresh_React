import React from 'react';
import { PMHeader } from './PMHeader';
import PMSidebar from './PMSidebar';
import { PMMainContent } from './PMMainContent';
import { PMFooter } from './PMFooter';


export const ProjectManagerDashboard = () => {
  return (
    <div>
      <div id="wrapper">
        <PMSidebar></PMSidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <PMHeader />
            <PMMainContent />
          </div>
          <PMFooter />
        </div>
      </div>
    </div>
  )
}
