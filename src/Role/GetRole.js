import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetRole = () => {

    const [roleList, setroleList] = useState([])


    const getData = () => {

        axios.get(`http://localhost:4000/roles/`).then(res => {
            console.log(res.data.data)
            setroleList(res.data.data)
        })

    }
    useEffect(() => {
        getData()
    }, [])

    const deleteData = (id) => {
        {
            axios.delete(`http://localhost:4000/roles/${id}`).then(res => {
                console.log(res.status)

                toast.success('🦄 Role Deleted Successfully', {
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

                            <h2 className="h3 mb-2 text-gray-800">Role Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-2">
                                    <Link to="/addRole" className="btn btn-success"  >Add Role</Link>
                                </div>
                                <div className="card-header py-3">
                                    
                                    <table className="table  table-hover table-responsive" style={{display:"block",maxHeight:"350px"}}>
                                        <thead className="thead-light" >
                                            <tr>
                                                <th scope="col">RoleId</th>
                                                <th scope="col">RoleName</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {
                                                roleList.map((role) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{role._id}</th>
                                                            <td>{role.roleName}</td>
                                                            <td>

                                                                <button onClick={() => { deleteData(role._id) }} className="btn btn-danger">DELETE</button>

                                                                <Link to={`/UpdateRole/${role._id}`} className="btn btn-primary" style={{ marginLeft: "10px" }}>UPDATE</Link>

                                                            </td>
                                                        </tr>

                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    

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
