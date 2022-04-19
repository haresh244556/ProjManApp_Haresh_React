import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DHeader } from '../DHeader';
import DSidebar from '../DSidebar';
import { DFooter } from '../DFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DTask = () => {

    const [taskList, settaskList] = useState([])

    const getData = () => {

        axios.get(`http://localhost:4000/tasks/`).then(res => {
            console.log(res.data.data)
            settaskList(res.data.data)

        })

    }
    useEffect(() => {
        getData()

    }, [])

    


    return (

        <div>
            <div id="wrapper">
                <DSidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <DHeader />
                        <div className="container-fluid">
                            <h2 className="h3 mb-2 text-gray-800">Task Details</h2>
                            <div className="card shadow mb-3">
                                

                                <div className="card-header py-3">
                                    <div>
                                        <table className=" table  table-hover table-responsive">
                                            <thead className="thead-light" >
                                                <tr>
                                                    <th scope="col">TaskId</th>
                                                    <th scope="col">ProjectName</th>
                                                    <th scope="col">ModuleName</th>
                                                    <th scope="col">TaskName</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">EstimatedHours</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    taskList.map((task) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{task._id}</th>
                                                                <td>{task.project.title}</td>
                                                                <td>{task.project_module.moduleName}</td>
                                                                <td>{task.taskName}</td>
                                                                <td>{task.description}</td>
                                                                <td>{task.estimatedHours}</td>
                                                                <td>{task.status.statusName}</td>

                                                                <td>
                                                                    <Link to={`/dUpdateTask/${task._id}`} className="btn btn-primary" >UPDATE</Link>
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
                    <DFooter />
                </div>
            </div>
        </div>
    )
}


