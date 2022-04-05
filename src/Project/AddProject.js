import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar  from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';

export const AddProject = () => {

    
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [technology, settechnology] = useState('')
    const [estimatedHours, setestimatedHours] = useState('')
    const [startDate, setstartDate] = useState('')
    const [completionDate, setcompletionDate] = useState('')


    var data ={
        title: title,
        descritpion:description,
        technology:technology,
        estimatedHours:estimatedHours,
        startDate:startDate,
        completionDate:completionDate
    }
    const submit = (e)=>{

        e.preventDefault()
        axios.post('http://localhost:4000/projects',data).then(res => {
            console.log(res.status)
            console.log(res.data)
            alert("Project added successfuly...")
            
        })

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
                                <div class="card-header py-3">
                                    <div>
                                        <form onSubmit ={submit}>
                                            <div class="form-group">
                                                <h5 class="h3 mb-2 text-gray-800"> Add Project</h5>
                                                <input class="form-control" type="text" name="title" placeholder="Enter Title" onChange={(e) =>{settitle(e.target.value)}} required/>
                                                <input class="form-control" type="text" name="description" placeholder="Enter Description" onChange={(e) =>{setdescription(e.target.value)}} required />
                                                <input class="form-control" type="text" name="technology" placeholder="Enter Technology" onChange={(e) =>{settechnology(e.target.value)}} required />
                                                <input class="form-control" type="number" name="estimatedHours" placeholder="Enter EstimatedHours " onChange={(e) =>{setestimatedHours(e.target.value)}} required />
                                                <input class="form-control" type="text" name="startDate" placeholder="Enter StartDate " onChange={(e) =>{setstartDate(e.target.value)}} required />
                                                <input class="form-control" type="text" name="completionDate" placeholder="Enter CompletionDate " onChange={(e) =>{setcompletionDate(e.target.value)}} required />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>

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

