import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {

  var navigate = useNavigate()

  const [roleList, setroleList] = useState([])

  const [firstName, setfirstName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')

  const getData = () => {

    axios.get(`http://localhost:4000/roles/`).then(res => {
      console.log(res.data.data)
      setroleList(res.data.data)

    })

  }
  useEffect(() => {
    getData()
  }, [])


  var data = {
    firstName: firstName,
    email: email,
    password: password,
    role: role
  }
  const submit = (e) => {

    e.preventDefault()

    axios.post('http://localhost:4000/users', data).then(res => {
      console.log(res.status)
      console.log(res.data)

      toast.success('🦄 Account Created Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      
      setTimeout(()=>{
        navigate("/")
      },2000);
      
      
     
    }).catch(err =>{
      console.log(err)
    })

  }

  return (

    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="card shadow-lg border-0 rounded-lg mt-5" style={{ background: "aqua" }}>
                  <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                  <div className="card-body">
                    <form onSubmit={submit}>

                      <div className="form-floating mb-3">
                        <input className="form-control" id="inputUserName" type="text" placeholder="Enter Your Name" style={{ background: "aliceblue" }} onChange={(e) => { setfirstName(e.target.value) }} />
                        <label for="inputUserName">UserName</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" style={{ background: "aliceblue" }} onChange={(e) => { setemail(e.target.value) }} />
                        <label for="inputEmail">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" style={{ background: "aliceblue" }} onChange={(e) => { setpassword(e.target.value) }} />
                        <label for="inputPassword">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <select className="form-control" id="inputRoleName" style={{ background: "aliceblue" }} onChange={(e) => { setrole(e.target.value) }} required >
                          <option>--Select--</option>
                          {roleList.map((role) => {
                            return (
                              <option value={role._id} data-select2-id="3">
                                {role.roleName}
                              </option>
                            );
                          })}
                        </select>
                        <label for="inputRoleName">RoleName</label>
                      </div>

                      <div className="mt-4 mb-3">
                        <div className="d-grid"><button className="btn btn-success btn-block" > <strong>Sign Up</strong></button></div>
                      </div>
                      <ToastContainer
                          position="top-center"
                          autoClose={2500}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                      />
                    </form>
                  </div>
                  <div className="card-footer text-center py-3">
                    <div className="small"><Link to="/Login"><h6>Have an account? Go to login</h6></Link></div>
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
