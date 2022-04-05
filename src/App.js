import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Signup} from './components/Signup';
import {Login} from './components/Login';

import{AdminDashboard} from './Admin/AdminDashboard';
import { AddRole } from './Role/AddRole';
import {GetRole} from './Role/GetRole';
import {UpdateRole} from  './Role/UpdateRole';
import { AddUser } from './User/AddUser';
import {GetUser} from './User/GetUser';
import {UpdateUser} from  './User/UpdateUser';
import {AddProject} from './Project/AddProject';
import {GetProject} from './Project/GetProject';
import {UpdateProject} from  './Project/UpdateProject';


function App() {
 
  return (
    <div>
      
     <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path ="/Login" element = {<Login/>}></Route>
      <Route path ="/Signup" element={<Signup/>}></Route>
      </Routes>   

       <Routes>  
      <Route path ="/AdminDashboard" element={<AdminDashboard/>}></Route>
      <Route path ="/role" element = {<GetRole/>}></Route>
      <Route path ="/addRole" element = {<AddRole/>}></Route>
      <Route path ="/UpdateRole/:id" element = {<UpdateRole/>}></Route> 
      <Route path ="/user" element = {<GetUser/>}></Route>
      <Route path ="/addUser" element = {<AddUser/>}></Route>
      <Route path ="/UpdateUser/:id" element = {<UpdateUser/>}></Route>      
      <Route path ="/project" element = {<GetProject/>}></Route>
      <Route path ="/addProject" element = {<AddProject/>}></Route>
      <Route path ="/UpdateProject/:id" element = {<UpdateProject/>}></Route>  
      </Routes>
       
    </div>
    
  );
}

export default App;
