import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PMHeader } from '../PMHeader';
import PMSidebar from '../PMSidebar';
import { PMFooter } from '../PMFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PMAddProjectmodule = () => {
    const [statusList, setstatusList] = useState([])
    const [projectList, setprojectList] = useState([])

    const [project, setproject] = useState('')
    const [moduleName, setmoduleName] = useState('')
    const [description, setdescription] = useState('')
    const [estimatedHours, setestimatedHours] = useState('')
    const [status, setstatus] = useState('')

    const getData = () => {

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


    var data = {
        project: project,
        moduleName: moduleName,
        description: description,
        estimatedHours: estimatedHours,
        status: status

    }
    const submit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:4000/project_modules', data).then(res => {
            console.log(res.status)
            console.log(res.data)
            toast.success('🦄 Project_module Added Successfully', {
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
                            <h2 className="h3 mb-2 text-gray-800">Project_module Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit={submit}>
                                            <div className="form-group">
                                                <h5 className="h3 mb-2 text-gray-800"> Add Project_module</h5>
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
                                                <input className="form-control" type="text" name="modulename" placeholder="Enter moduleName" onChange={(e) => { setmoduleName(e.target.value) }} required />
                                                <input className="form-control" type="text" name="description" placeholder="Enter Description" onChange={(e) => { setdescription(e.target.value) }} required />
                                                <input className="form-control" type="text" name="estimatedHours" placeholder="Enter EstimatedHours " onChange={(e) => { setestimatedHours(e.target.value) }} required />
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

