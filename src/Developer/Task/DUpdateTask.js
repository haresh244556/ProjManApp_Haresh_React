import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DHeader } from '../DHeader';
import DSidebar from '../DSidebar';
import { DFooter } from '../DFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DUpdateTask = () => {
    var id = useParams().id;

    
    const [statusList, setstatusList] = useState([])
    

    const [task, settask] = useState('')
    
    const [estimatedHours, setestimatedHours] = useState(task.estimatedHours)
    const [status, setstatus] = useState(task.status)

    const getData = () => {

        axios.get(`http://localhost:4000/tasks/${id}`).then(res => {
            settask(res.data.data)
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
            taskId: id,
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
                <DSidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <DHeader />
                        <div className="container-fluid">
                            <h2 className="h3 mb-2 text-gray-800">Task Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit={updateData}>
                                            <div className="form-group">
                                                <h5 className="h3 mb-2 text-gray-800"> Update Task</h5>
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


                    <DFooter />
                </div>
            </div>

        </div>
    )
}


