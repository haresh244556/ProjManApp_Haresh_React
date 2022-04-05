import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar  from '../Admin/Sidebar';
import { MainContent } from '../Admin/MainContent';
import { Footer } from '../Admin/Footer';

export const GetUser = () => {

    const [userList, setuserList] = useState([])
    const [firstName, setfirstName] = useState('')
    const [email, setemail] = useState('')
    

    const getData = () => {

        axios.get(`http://localhost:4000/users/`).then(res => {
            console.log(res.data.data)
            setuserList(res.data.data)

        })

    }
    useEffect(() => {
        getData()
    }, [])

    const deleteData = (id) => {
        {
            axios.delete(`http://localhost:4000/users/${id}`).then(res => {
                console.log(res.status)
                alert("Data deleted...")
            })

        }
    }

    
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">

                    <Header/>

                        <div class="container-fluid">

                            <h2 class="h3 mb-2 text-gray-800">User Details</h2>
                            <div class="card shadow mb-3">
                                <div class="card-header py-2">
                                    <Link to="/addUser" className="btn btn-success"  >Add User</Link>
                                </div>

                                <div class="card-header py-3">
                                    <div>
                                        <table class=" table table-bordered table-hover">
                                            <thead class="thead-light" >
                                                <tr>
                                                    <th scope="col">UserId</th>
                                                    <th scope="col">UserName</th>
                                                    <th scope="col">Email</th>
                                                    
                                                    <th scope="col">RoleName</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    userList.map((user) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{user._id}</th>
                                                                <td>{user.firstName}</td>
                                                                <td>{user.email}</td>
                                                                
                                                                <td>{user.role.roleName}</td>
                                                                <td>
                                                                    
                                                                        <button onClick={() => { deleteData(user._id) }} className="btn btn-danger">DELETE</button>

                                                                        <Link to={`/UpdateUser/${user._id}`} className="btn btn-primary" style={{ marginLeft: "10px" }}>UPDATE</Link>
                                                                    
                                                                </td>
                                                            </tr>

                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
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

