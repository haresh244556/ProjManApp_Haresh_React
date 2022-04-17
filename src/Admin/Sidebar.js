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

const Sidebar = () => {

  return (
    <div
      className={`app`}
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="blue"
      >
        <CDBSidebarHeader
          prefix={
            <i className="fa fa-bars fa-large"></i>
          }
        >
          <NavLink to="" className="text-decoration-none" style={{ color: "inherit" }}>
            Admin Dashboard
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/role"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="columns"
              >
                Roles
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/user"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="user"
              >
                Users
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/project"
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
              to="/project_module"
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
              to="/Task"
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
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default Sidebar;
