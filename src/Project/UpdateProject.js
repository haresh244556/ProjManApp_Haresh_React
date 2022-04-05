import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import Sidebar  from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';

export const UpdateProject = () => {

    var id = useParams().id;
    const [project, setproject] = useState('')
    const [title, settitle] = useState(project.title)
    const [description, setdescription] = useState(project.description)
    const [technology, settechnology] = useState(project.technology)
    const [estimatedHours, setestimatedHours] = useState(project.estimatedHours)
    const [startDate, setstartDate] = useState(project.startDate)
    const [completionDate, setcompletionDate] = useState(project.completionDate)

    const getData = () => {

        axios.get(`http://localhost:4000/projects/${id}`).then(res => {
          setproject(res.data.data)
          console.log(res.data.data)
        }).catch(err => {
          console.log(err);
        })
    }
    
    
    useEffect(() => {
        getData()
    }, [])

    
    const updateData = (e) => {
        var Data ={
            projectId: id,
            title: title,
            descritpion:description,
            technology:technology,
            estimatedHours:estimatedHours,
            startDate:startDate,
            completionDate:completionDate
        }

        e.preventDefault()
        axios.put('http://localhost:4000/projects/',Data).then(res => {
            
            alert("Project Updated ...")
            
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
            <h2 class="h3 mb-2 text-gray-800">Update Project</h2>
            <div class="card shadow mb-3">
              <div class="card-header py-3">

                <div>
                  <form onSubmit={updateData}>
                    <div class="form-group">
                      <input type="text" class="form-control" aria-describedby="titleHelp" defaultValue={project.title}  placeholder="Enter Title" onChange={(e) => settitle(e.target.value)} />
                   
                      <input type="text" class="form-control" aria-describedby="descriptionHelp" defaultValue={project.description}  placeholder="Enter Description" onChange={(e) => setdescription(e.target.value)} />
                    
                      <input type="text" class="form-control" aria-describedby="technologyHelp" defaultValue={project.technology} placeholder="Enter Technology"  onChange={(e) => settechnology(e.target.value)} />
                    
                      <input type="text" class="form-control" aria-describedby="estimatedHoursHelp" defaultValue={project.estimatedHours} placeholder="Enter EstimatedHours "  onChange={(e) => setestimatedHours(e.target.value)} />
                     
                      <input type="text" class="form-control" aria-describedby="startDateHelp" defaultValue={project.startDate}  placeholder="Enter StartDate "onChange={(e) => setstartDate(e.target.value)} />
                     
                      <input type="text" class="form-control" aria-describedby="completionDateHelp" defaultValue={project.completionDate} placeholder="Enter CompletionDate " onChange={(e) => setcompletionDate(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>





                    


    )
}

