import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetProjectmodule = () => {

    const [project_moduleList, setproject_moduleList] = useState([])

    const getData = () => {

        axios.get(`http://localhost:4000/project_modules/`).then(res => {
            console.log(res.data.data)
            setproject_moduleList(res.data.data)

        })

    }
    useEffect(() => {
        getData()
    }, [])

    const deleteData = (id) => {
        {
            axios.delete(`http://localhost:4000/project_modules/${id}`).then(res => {
                console.log(res.status)
                toast.success('🦄 Project_module Deleted Successfully', {
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
                            <h2 className="h3 mb-2 text-gray-800">Project_module Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-2">
                                    <Link to="/addProject_module" className="btn btn-success"  >Add Project_module</Link>
                                </div>

                                <div className="card-header py-3">
                                    <div>
                                        <table className=" table  table-hover table-responsive" style={{display:"block",maxHeight:"350px"}}>
                                            <thead className="thead-light" >
                                                <tr>
                                                    <th scope="col">Project_moduleId</th>
                                                    <th scope="col">ProjectName</th>
                                                    <th scope="col">ModuleName</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">EstimatedHours</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    project_moduleList.map((project_module) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{project_module._id}</th>
                                                                <td>{project_module.project.title}</td>
                                                                <td>{project_module.moduleName}</td>
                                                                <td>{project_module.description}</td>
                                                                <td>{project_module.estimatedHours}</td>
                                                                <td>{project_module.status.statusName}</td>

                                                                <td>

                                                                    <button onClick={() => { deleteData(project_module._id) }} className="btn btn-danger">DELETE</button>

                                                                    <Link to={`/UpdateProject_module/${project_module._id}`} className="btn btn-primary" >UPDATE</Link>

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


