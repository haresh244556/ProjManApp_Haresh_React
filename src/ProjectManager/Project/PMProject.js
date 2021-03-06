import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { PMHeader } from '../PMHeader';
import PMSidebar from '../PMSidebar';
import { PMFooter } from '../PMFooter';


export const PMProject = () => {

    const [projectList, setprojectList] = useState([])

    const getData = () => {

        axios.get(`http://localhost:4000/projects/`).then(res => {
            console.log(res.data.data)
            setprojectList(res.data.data)

        })

    }
    useEffect(() => {
        getData()
    }, [])

    
    return (

        <div>
            <div id="wrapper">
                <PMSidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <PMHeader />
                        <div className="container-fluid">
                            <h2 className="h3 mb-2 text-gray-800">Project Details</h2>

                            <div className="card shadow mb-3">

                                <div className="card-header py-3">
                                    <div>
                                        <table className=" table  table-hover table-responsive" style={{display:"block",maxHeight:"350px"}}>
                                            <thead className="thead-light" >
                                                <tr>
                                                    <th scope="col">ProjectId</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Technology</th>
                                                    <th scope="col">EstimatedHours</th>
                                                    <th scope="col">StartDate</th>
                                                    <th scope="col">CompletionDate</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    projectList.map((project) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{project._id}</th>
                                                                <td>{project.title}</td>
                                                                <td>{project.description}</td>
                                                                <td>{project.technology}</td>
                                                                <td>{project.estimatedHours}</td>
                                                                <td>{project.startDate}</td>
                                                                <td>{project.completionDate}</td>
                                                                <td>{project.status.statusName}</td>
                                                                <td>
                                                                    <Link to={`/PMUpdateProject/${project._id}`} className="btn btn-primary" >UPDATE</Link>
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
                    <PMFooter />
                </div>
            </div>
        </div>
    )
}

