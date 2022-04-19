import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { PMHeader } from '../PMHeader';
import PMSidebar from '../PMSidebar';
import { PMFooter } from '../PMFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PMUpdateProjectmodule = () => {

    var id = useParams().id;

    const [statusList, setstatusList] = useState([])
    const [projectList, setprojectList] = useState([])

    const [project_module, setproject_module] = useState('')
    const [project, setproject] = useState(project_module.project)
    const [moduleName, setmoduleName] = useState(project_module.moduleName)
    const [description, setdescription] = useState(project_module.description)
    const [estimatedHours, setestimatedHours] = useState(project_module.estimatedHours)
    const [status, setstatus] = useState(project_module.status)

    const getData = () => {

        axios.get(`http://localhost:4000/project_modules/${id}`).then(res => {
            setproject_module(res.data.data)
            console.log(res.data.data)
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
            project_moduleId: id,
            project: project,
            moduleName: moduleName,
            description: description,
            estimatedHours: estimatedHours,
            status: status
        }
        e.preventDefault()

        axios.put(`http://localhost:4000/project_modules/`, Data).then(res => {

            toast.success('🦄 Project_module Updated Successfully', {
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
                <PMSidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <PMHeader />
                        <div className="container-fluid">
                            <h2 className="h3 mb-2 text-gray-800">Update Project_module</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit={updateData}>
                                            <div className="form-group">
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
                                                <input className="form-control" type="text" name="modulename" placeholder="Enter moduleName" onChange={(e) => { setmoduleName(e.target.value) }} />
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


                    <PMFooter />
                </div>
            </div>

        </div>


    )
}

