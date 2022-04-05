import React from 'react'
import {Link} from 'react-router-dom'

export const Signup = () => {
    
  return (
   
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow-lg border-0 rounded-lg mt-5" style={{background:"aqua"}}>
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                <div className="card-body">
                  <form>
                    
                    <div className="form-floating mb-3">
                      <input className="form-control" id="inputUserName" type="text" placeholder="Enter Your Name" style={{background:"aliceblue"}}/>
                      <label for="inputUserName">UserName</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" style={{background:"aliceblue"}}/>
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" style={{background:"aliceblue"}}/>
                      <label for="inputPassword">Password</label>
                    </div>
                    
                    <div className="mt-4 mb-3">
                      <div className="d-grid"><Link className="btn btn-success btn-block" to="/"> <strong>Sign Up</strong></Link></div>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center py-3">
                  <div className="small"><Link to="/Login">Have an account? Go to login</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    
  </div>


       
  )
}
