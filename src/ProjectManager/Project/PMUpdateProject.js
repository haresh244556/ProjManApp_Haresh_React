import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PMHeader } from '../PMHeader';
import PMSidebar from '../PMSidebar';
import { PMFooter } from '../PMFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PMUpdateProject = () => {

  var id = useParams().id;
  const [statusList, setstatusList] = useState([])

  const [project, setproject] = useState('')
  const [title, settitle] = useState(project.title)
  const [description, setdescription] = useState(project.description)
  const [technology, settechnology] = useState(project.technology)
  const [estimatedHours, setestimatedHours] = useState(project.estimatedHours)
  const [startDate, setstartDate] = useState(project.startDate)
  const [completionDate, setcompletionDate] = useState(project.completionDate)
  const [status, setstatus] = useState(project.status)

  const getData = () => {

    axios.get(`http://localhost:4000/projects/${id}`).then(res => {
      setproject(res.data.data)
      console.log(res.data.data)
    })

    axios.get(`http://localhost:4000/status/`).then(res => {
      console.log(res.data.data)
      setstatusList(res.data.data)

    })

  }


  useEffect(() => {
    getData()

  }, [])


  const updateData = (e) => {
    var Data = {
      projectId: id,
      title: title,
      description: description,
      technology: technology,
      estimatedHours: estimatedHours,
      startDate: startDate,
      completionDate: completionDate,
      status: status
    }

    e.preventDefault()
    axios.put('http://localhost:4000/projects/', Data).then(res => {

      toast.success('🦄 Project Updated Successfully', {
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
              <h2 className="h3 mb-2 text-gray-800">Update Project</h2>
              <div className="card shadow mb-3">
                <div className="card-header py-3">
                  <div>
                    <form onSubmit={updateData}>
                      <div className="form-group">
                        <input type="text" className="form-control" aria-describedby="titleHelp" defaultValue={project.title} placeholder="Enter Title" onChange={(e) => settitle(e.target.value)} />

                        <input type="text" className="form-control" aria-describedby="descriptionHelp" defaultValue={project.description} placeholder="Enter Description" onChange={(e) => setdescription(e.target.value)} />

                        <input type="text" className="form-control" aria-describedby="technologyHelp" defaultValue={project.technology} placeholder="Enter Technology" onChange={(e) => settechnology(e.target.value)} />

                        <input type="text" className="form-control" aria-describedby="estimatedHoursHelp" defaultValue={project.estimatedHours} placeholder="Enter EstimatedHours " onChange={(e) => setestimatedHours(e.target.value)} />

                        <input type="text" className="form-control" aria-describedby="startDateHelp" defaultValue={project.startDate} placeholder="Enter StartDate " onChange={(e) => setstartDate(e.target.value)} />

                        <input type="text" className="form-control" aria-describedby="completionDateHelp" defaultValue={project.completionDate} placeholder="Enter CompletionDate " onChange={(e) => setcompletionDate(e.target.value)} />
                        <select className="form-control" type="text" defaultValue={project.status} onChange={(e) => { setstatus(e.target.value) }} >
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

