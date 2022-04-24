import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { PMHeader } from '../PMHeader';
import PMSidebar from '../PMSidebar';
import { PMFooter } from '../PMFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PMUser_task = () => {

    const [userList, setuserList] = useState([])
    const [taskList,settaskList] = useState([])

    const [user, setuser] = useState('')
    const [task, settask] = useState('')
    
    const getData = () => {

      axios.get(`http://localhost:4000/users/`).then(res => {
          console.log(res.data.data)
          setuserList(res.data.data)

      })

      axios.get(`http://localhost:4000/tasks/`).then(res => {
        console.log(res.data.data)
        settaskList(res.data.data)

    })

    }
    useEffect(() => {
        getData()
    }, [])

    var data = {
        user: user,
        task:task
        
    }
    const submit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:4000/user_tasks', data).then(res => {
            console.log(res.status)
            console.log(res.data)
            toast.success('🦄 Task Assigned Successfully', {
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
                            <h2 className="h3 mb-2 text-gray-800">User_tasks Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit={submit}>
                                            <div className="form-group">
                                              <label className="h6 mb-2 text-gray-800" >Developer</label>
                                              <select className="form-control" type="text" onChange={(e) => { setuser(e.target.value) }} required >
                                                    <option>--Select--</option>
                                                    {userList.map((user) => {
                                                        return (
                                                            <option value={user._id} data-select2-id="3">
                                                                {user.firstName}
                                                          
                                                            </option>
                                                          
                                                        );
                                                    })}
                                                </select>
                                                <label className="h6 mb-2 text-gray-800" >Task</label>
                                              <select className="form-control" type="text" onChange={(e) => { settask(e.target.value) }} required >
                                                    <option>--Select--</option>
                                                    {taskList.map((task) => {
                                                        return (
                                                            <option value={task._id} data-select2-id="3">
                                                                {task.taskName}
                                                          
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


