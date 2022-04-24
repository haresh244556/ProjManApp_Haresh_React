import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';


export const Report = () => {

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
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <h2 className="h3 mb-2 text-gray-800">Project Report</h2>
                            <div className="card shadow mb-3">
                               

                                <div className="card-header py-3">
                                    <div>
                                        <table className=" table  table-hover table-responsive" style={{display:"block",maxHeight:"350px"}}>
                                            <thead className="thead-light" >
                                                <tr>
                                                    
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Technology</th>
                                                    <th scope="col">EstimatedHours</th>
                                                    <th scope="col">StartDate</th>
                                                    <th scope="col">CompletionDate</th>
                                                    <th scope="col">Status</th>
                                                
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    projectList.map((project) => {
                                                        return (
                                                            <tr>
                                                                
                                                                <td>{project.title}</td>
                                                                <td>{project.description}</td>
                                                                <td>{project.technology}</td>
                                                                <td>{project.estimatedHours}</td>
                                                                <td>{project.startDate}</td>
                                                                <td>{project.completionDate}</td>
                                                                <td>{project.status.statusName}</td>
                                                                
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



