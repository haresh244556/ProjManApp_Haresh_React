import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import  Sidebar  from '../Admin/Sidebar';
import { Footer } from '../Admin/Footer';

export const AddRole = () => {
    const[roleName,setroleName] = useState('')

    
    var data ={
        roleName:roleName
    }
    const submit = (e)=>{

        e.preventDefault()
        axios.post('http://localhost:4000/roles',data).then(res => {
            console.log(res.status)
            console.log(res.data)
            alert("Role added successfuly...")
            
        })

    }
  return (
    <div>
        <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <Header/>
                        <div className="container-fluid">
                            <h2 className="h3 mb-2 text-gray-800">Role Details</h2>
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <div>
                                        <form onSubmit ={submit}>
                                            <div className="form-group">
                                                <h5 className="h3 mb-2 text-gray-800"> Add Role</h5>
                                                <input className="form-control" type="text" name="roleName" placeholder="Enter roleName" onChange={(e) =>{setroleName(e.target.value)}} />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>

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
