import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



export const Navbar = () => {



  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "skyblue" }}>
        <Link className="navbar-brand" to=""><strong>ProjectManagementApp</strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" className="btn btn-primary" to="/login" style={{ marginRight: "5px" }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" className="btn btn-success" to="/signup">Create Account</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      

    </div>



  )
}
