import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//Components
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import { Login } from './components/Login';

//Admin Dashboard
import { AdminDashboard } from './Admin/AdminDashboard';
import { AddRole } from './Role/AddRole';
import { GetRole } from './Role/GetRole';
import { UpdateRole } from './Role/UpdateRole';
import { AddUser } from './User/AddUser';
import { GetUser } from './User/GetUser';
import { UpdateUser } from './User/UpdateUser';
import { AddProject } from './Project/AddProject';
import { GetProject } from './Project/GetProject';
import { UpdateProject } from './Project/UpdateProject';
import { AddProjectmodule } from './Project_module/AddProjectmodule';
import { GetProjectmodule } from './Project_module/GetProjectmodule';
import { UpdateProjectmodule } from './Project_module/UpdateProjectmodule';
import { AddTask } from './Task/AddTask';
import { GetTask } from './Task/GetTask';
import { UpdateTask } from './Task/UpdateTask';

//Project Manager
import {ProjectManagerDashboard} from './ProjectManager/ProjectManagerDashboard';
import { PMProject } from './ProjectManager/Project/PMProject';
import { PMUpdateProject } from './ProjectManager/Project/PMUpdateProject';
import { PMProjectmodule } from './ProjectManager/Project_module/PMProjectmodule';
import { PMUpdateProjectmodule} from './ProjectManager/Project_module/PMUpdateProjectmodule';
import { PMTask } from './ProjectManager/Task/PMTask';
import { PMUpdateTask } from './ProjectManager/Task/PMUpdateTask';

//Developer
import {DeveloperDashboard} from './Developer/DeveloperDashboard';
import { DTask } from './Developer/Task/DTask';
import { DUpdateTask } from './Developer/Task/DUpdateTask';

function App() {

  return (

    <div>
      
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>

      <Routes>
        <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
        <Route path="/role" element={<GetRole />}></Route>
        <Route path="/addRole" element={<AddRole />}></Route>
        <Route path="/UpdateRole/:id" element={<UpdateRole />}></Route>
        <Route path="/user" element={<GetUser />}></Route>
        <Route path="/addUser" element={<AddUser />}></Route>
        <Route path="/UpdateUser/:id" element={<UpdateUser />}></Route>
        <Route path="/project" element={<GetProject />}></Route>
        <Route path="/addProject" element={<AddProject />}></Route>
        <Route path="/UpdateProject/:id" element={<UpdateProject />}></Route>
        <Route path="/project_module" element={<GetProjectmodule />}></Route>
        <Route path="/addProject_module" element={<AddProjectmodule />}></Route>
        <Route path="/UpdateProject_module/:id" element={<UpdateProjectmodule />}></Route>
        <Route path="/Task" element={<GetTask />}></Route>
        <Route path="/addTask" element={<AddTask />}></Route>
        <Route path="/UpdateTask/:id" element={<UpdateTask />}></Route>
      </Routes>

      <Routes>
        <Route path="/ProjectManagerDashboard" element={<ProjectManagerDashboard />}></Route>
        <Route path="/pmproject" element={<PMProject />}></Route>
        <Route path="/PMUpdateProject/:id" element={<PMUpdateProject />}></Route>
        <Route path="/pmproject_module" element={<PMProjectmodule />}></Route>
        <Route path="/PMUpdateProject_module/:id" element={<PMUpdateProjectmodule />}></Route>
        <Route path="/pmTask" element={<PMTask />}></Route>
        <Route path="/PMUpdateTask/:id" element={<PMUpdateTask />}></Route>
      </Routes>
      
        <Routes>
          <Route path="/DeveloperDashboard" element={<DeveloperDashboard />}></Route>
          <Route path="/dTask" element={<DTask />}></Route>
          <Route path="/dUpdateTask/:id" element={<DUpdateTask />}></Route>
        </Routes>


    </div>

  );
}

export default App;
