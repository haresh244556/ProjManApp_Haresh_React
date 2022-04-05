import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    

  return (
         
    <div>
      <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"dodgerblue"}}>
        <a class="navbar-brand" href="#"><strong>ProjectManagementApp</strong></a>
      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul class="navbar-nav ml-auto"> 
            <li class="nav-item">
               <Link className="nav-link" class="btn btn-primary"  to="/login" style={{marginRight:"5px"}}>Login</Link>
            </li>
            <li class="nav-item">
              </li>
           
            
          </ul>
        </div>
      </nav>
      <div>
      <center> 
        <h1 > <strong>Welcome </strong></h1>
        
      </center>
      </div>
    </div>
    
  
  )
}
