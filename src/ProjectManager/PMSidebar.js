import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";

const PMSidebar = () => {

  return (
    <div
      className={`app`}
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="seagreen"
      >
        <CDBSidebarHeader
          prefix={
            <i className="fa fa-bars fa-large"></i>
          }
        >
          <NavLink to="/ProjectManagerDashboard" className="text-decoration-none" style={{ color: "inherit" }}>
            Project Manager<br/><center>Dashboard</center>
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/pmproject"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="table"
              >
                Projects
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/pmproject_module"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="sticky-note"
              >
                Project Modules
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/pmTask"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="th-large"
              >
                Project Tasks
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px"
            }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default PMSidebar;
