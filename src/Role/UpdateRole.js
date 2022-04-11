import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { MainContent } from '../Admin/MainContent';
import { Footer } from '../Admin/Footer';
import { Link } from 'react-router-dom'

export const UpdateRole = () => {
  var id = useParams().id;
  const [role, setrole] = useState('')
  const [roleName, setroleName] = useState(role.roleName)

  const getData = () => {

    axios.get(`http://localhost:4000/roles/${id}`).then(res => {
      setrole(res.data.data)
      console.log(res.data.data)
    }).catch(err => {
      console.log(err);
    })
  }


  useEffect(() => {
    getData()

  }, [])

  const updateData = (e) => {
    var Data = {
      roleId: id,
      roleName: roleName,
    }
    e.preventDefault()

    axios.put(`http://localhost:4000/roles/`, Data).then(res => {
      alert("Data updated...")
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
              <h2 className="h3 mb-2 text-gray-800">Update Role</h2>
              <div className="card shadow mb-3">
                <div className="card-header py-3">

                  <div>
                    <form onSubmit={updateData}>
                      <div className="form-group">
                        <label>RoleName</label>
                        <input type="text" className="form-control" aria-describedby="RoleNameHelp" defaultValue={role.roleName} onChange={(e) => setroleName(e.target.value)} />
                      </div>

                      <button type="submit" className="btn btn-primary">Submit</button>
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
