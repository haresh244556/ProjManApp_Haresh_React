import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProject = () => {

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [technology, settechnology] = useState('')
    const [estimatedHours, setestimatedHours] = useState('')
    const [startDate, setstartDate] = useState('')
    const [completionDate, setcompletionDate] = useState('')


    var data = {
        title: title,
        description: description,
        technology: technology,
        estimatedHours: estimatedHours,
        startDate: startDate,
        completionDate: completionDate
    }
    const submit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:4000/projects', data).then(res => {
            console.log(res.status)
            console.log(res.data)
            toast.success('🦄 Project Added Successfully', {
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
                            <h2 className="h3 mb-2 text-gray-800">Project Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit={submit}>
                                            <div className="form-group">
                                                <h5 className="h3 mb-2 text-gray-800"> Add Project</h5>
                                                <input className="form-control" type="text" name="title" placeholder="Enter Title" onChange={(e) => { settitle(e.target.value) }} required />
                                                <input className="form-control" type="text" name="description" placeholder="Enter Description" onChange={(e) => { setdescription(e.target.value) }} required />
                                                <input className="form-control" type="text" name="technology" placeholder="Enter Technology" onChange={(e) => { settechnology(e.target.value) }} required />
                                                <input className="form-control" type="text" name="estimatedHours" placeholder="Enter EstimatedHours " onChange={(e) => { setestimatedHours(e.target.value) }} required />
                                                <input className="form-control" type="text" name="startDate" placeholder="Enter StartDate " onChange={(e) => { setstartDate(e.target.value) }} required />
                                                <input className="form-control" type="text" name="completionDate" placeholder="Enter CompletionDate " onChange={(e) => { setcompletionDate(e.target.value) }} required />
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

