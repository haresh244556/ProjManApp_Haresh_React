import React from "react";
import { 
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
    <div
      className={`app`}
      style={{ display: "flex", height: "100vh", overflow:"scroll initial"}}
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
          <a href="/" className="text-decoration-none" style={{color:"inherit"}}>
          Admin Dashboard 
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/role"
              activeClassName="activeClicked"
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
              activeClassName="activeClicked"
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
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="table"
              >
                Projects
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
          <CDBSidebarMenu>
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
