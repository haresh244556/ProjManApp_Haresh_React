import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar  from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';

export const GetProject = () => {

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

    const deleteData = (id) => {
        {
            axios.delete(`http://localhost:4000/projects/${id}`).then(res => {
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

                            <h2 class="h3 mb-2 text-gray-800">Project Details</h2>
                            <div class="card shadow mb-3">
                                <div class="card-header py-2">
                                    <Link to="/addProject" className="btn btn-success"  >Add Project</Link>
                                </div>

                                <div class="card-header py-3">
                                    <div>
                                        <table class=" table table-bordered table-hover table-sm">
                                            <thead class="thead-light" >
                                                <tr>
                                                    <th scope="col">ProjectId</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Technology</th>
                                                    <th scope="col">EstimatedHours</th>
                                                    <th scope="col">StartDate</th>
                                                    <th scope="col">CompletionDate</th>
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
                                                                
                                                                <td>
                                                                    
                                                                        <button onClick={() => { deleteData(project._id) }} className="btn btn-danger">DELETE</button>

                                                                        <Link to={`/UpdateProject/${project._id}`} className="btn btn-primary" >UPDATE</Link>
                                                                    
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

