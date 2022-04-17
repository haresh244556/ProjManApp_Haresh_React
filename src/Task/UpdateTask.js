import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateTask = () => {
    var id = useParams().id;

    const [project_moduleList, setproject_moduleList] = useState([])
    const [statusList, setstatusList] = useState([])
    const [projectList, setprojectList] = useState([])

    const [task, settask] = useState('')
    const [project_module, setproject_module] = useState(task.project_module)
    const [project, setproject] = useState(task.project)
    const [taskName, settaskName] = useState(task.taskName)
    const [description, setdescription] = useState(task.description)
    const [estimatedHours, setestimatedHours] = useState(task.estimatedHours)
    const [status, setstatus] = useState(task.status)

    const getData = () => {

        axios.get(`http://localhost:4000/tasks/${id}`).then(res => {
            settask(res.data.data)
            console.log(res.data.data)
        })

        axios.get(`http://localhost:4000/project_modules/`).then(res => {
            console.log(res.data.data)
            setproject_moduleList(res.data.data)

        })
        axios.get(`http://localhost:4000/status/`).then(res => {
            console.log(res.data.data)
            setstatusList(res.data.data)

        })
        axios.get(`http://localhost:4000/projects/`).then(res => {
            console.log(res.data.data)
            setprojectList(res.data.data)

        })
    }
    useEffect(() => {
        getData()

    }, [])

    const updateData = (e) => {

        var Data = {
            taskId: id,
            project_module: project_module,
            project: project,
            taskName: taskName,
            description: description,
            estimatedHours: estimatedHours,
            status: status
        }
        e.preventDefault()

        axios.put(`http://localhost:4000/tasks/`, Data).then(res => {

            toast.success('🦄 Task Updated Successfully', {
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
                            <h2 className="h3 mb-2 text-gray-800">Task Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit={updateData}>
                                            <div className="form-group">
                                                <h5 className="h3 mb-2 text-gray-800"> Update Task</h5>
                                                <label className="h6 mb-2 text-gray-800" >Project_module</label>
                                                <select className="form-control" type="text" onChange={(e) => { setproject_module(e.target.value) }} required >
                                                    <option>--Select--</option>
                                                    {project_moduleList.map((project_module) => {
                                                        return (
                                                            <option value={project_module._id} data-select2-id="3">
                                                                {project_module.moduleName}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                <label className="h6 mb-2 text-gray-800" >Project</label>
                                                <select className="form-control" type="text" onChange={(e) => { setproject(e.target.value) }} required >
                                                    <option>--Select--</option>
                                                    {projectList.map((project) => {
                                                        return (
                                                            <option value={project._id} data-select2-id="3">
                                                                {project.title}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                <input className="form-control" type="text" name="taskname" placeholder="Enter TaskName" onChange={(e) => { settaskName(e.target.value) }} />
                                                <input className="form-control" type="text" name="description" placeholder="Enter Description" onChange={(e) => { setdescription(e.target.value) }} />
                                                <input className="form-control" type="text" name="estimatedHours" placeholder="Enter EstimatedHours " onChange={(e) => { setestimatedHours(e.target.value) }} />
                                                <label className="h6 mb-2 text-gray-800" >Status</label>
                                                <select className="form-control" type="text" onChange={(e) => { setstatus(e.target.value) }} required >
                                                    <option>--Select--</option>
                                                    {statusList.map((status) => {
                                                        return (
                                                            <option value={status._id} data-select2-id="3">
                                                                {status.statusName}
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


