import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetUser = () => {

    const [userList, setuserList] = useState([])

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
                toast.success('🦄 User Deleted Successfully', {
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
    }


    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <h2 className="h3 mb-2 text-gray-800">User Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-2">
                                    <Link to="/addUser" className="btn btn-success"  >Add User</Link>
                                </div>

                                <div className="card-header py-3">
                                    <div>
                                        <table className=" table  table-hover table-responsive ">
                                            <thead className="thead-light" >
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
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        </div>




    )
}

