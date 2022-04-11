import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';

export const UpdateUser = () => {
  var id = useParams().id;
  const [user, setuser] = useState('')
  const [firstName, setfirstName] = useState(user.firstName)
  const [email, setemail] = useState(user.email)
  const [password, setpassword] = useState(user.password)


  const getData = () => {

    axios.get(`http://localhost:4000/users/${id}`).then(res => {
      setuser(res.data.data)
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
      userId: id,
      firstName: firstName,
      email: email,
      password: password
    }
    e.preventDefault()

    axios.put(`http://localhost:4000/users/`, Data).then(res => {
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
