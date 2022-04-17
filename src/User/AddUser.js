import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddUser = () => {
    const [roleList, setroleList] = useState([])

    const [firstName, setfirstName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [role, setrole] = useState('')

    const getData = () => {

        axios.get(`http://localhost:4000/roles/`).then(res => {
            console.log(res.data.data)
            setroleList(res.data.data)

        })

    }
    useEffect(() => {
        getData()
    }, [])

    var data = {
        firstName: firstName,
        email: email,
        password: password,
        role: role
    }
    const submit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:4000/users', data).then(res => {
            console.log(res.status)
            console.log(res.data)
            toast.success('🦄 User Added Successfully', {
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
                            <h2 className="h3 mb-2 text-gray-800">User Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit={submit}>
                                            <div className="form-group">
                                                <h5 className="h3 mb-2 text-gray-800"> Add User</h5>
                                                <input className="form-control" type="text" name="userName" placeholder="Enter UserName" onChange={(e) => { setfirstName(e.target.value) }} required />
                                                <input className="form-control" type="email" name="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} required />
                                                <input className="form-control" type="password" name="password" placeholder="Enter password" onChange={(e) => { setpassword(e.target.value) }} required />
                                                <label className="h6 mb-2 text-gray-800">RoleName</label>
                                                <select className="form-control" type="text" onChange={(e) => { setrole(e.target.value) }} required >
                                                    <option>--select--</option>
                                                    {roleList.map((role) => {
                                                        return (
                                                            <option value={role._id} data-select2-id="3">
                                                                {role.roleName}
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


                    <Footer />
                </div>
            </div>

        </div>
    )
}

