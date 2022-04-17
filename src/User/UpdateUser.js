import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateUser = () => {
  var id = useParams().id;
  const [roleList, setroleList] = useState([])

  const [user, setuser] = useState('')
  const [firstName, setfirstName] = useState(user.firstName)
  const [email, setemail] = useState(user.email)
  const [password, setpassword] = useState(user.password)
  const [role, setrole] = useState(user.role)


  const getData = () => {

    axios.get(`http://localhost:4000/users/${id}`).then(res => {
      setuser(res.data.data)
      console.log(res.data.data)
    })

    axios.get(`http://localhost:4000/roles/`).then(res => {
      console.log(res.data.data)
      setroleList(res.data.data)

    })
  }


  useEffect(() => {
    getData()

  }, [])

  const updateData = (e) => {
    var Data = {
      userId: id,
      firstName: firstName,
      email: email,
      password: password,
      role: role
    }
    e.preventDefault()

    axios.put(`http://localhost:4000/users/`, Data).then(res => {

      toast.success('🦄 User Updated Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    })
  }


  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <h2 className="h3 mb-2 text-gray-800">Update User</h2>
              <div className="card shadow mb-3">
                <div className="card-header py-3">
                  <div>
                    <form onSubmit={updateData}>
                      <div className="form-group">
                        <label>UserName</label>
                        <input type="text" className="form-control" aria-describedby="firstNameHelp" defaultValue={user.firstName} onChange={(e) => setfirstName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" defaultValue={user.email} onChange={(e) => setemail(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" aria-describedby="passwordHelp" defaultValue={user.password} onChange={(e) => setpassword(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>RoleName</label>
                        <select className="form-control" onChange={(e) => { setrole(e.target.value) }}  >
                          <option>--Select--</option>
                          {roleList.map((role) => {
                            return (
                              <option value={role._id} data-select2-id="3">
                                {role.roleName}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary">Submit</button>
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
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>

  )
}
