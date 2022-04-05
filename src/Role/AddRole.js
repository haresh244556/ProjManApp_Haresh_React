import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
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
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">

                        <Header/>
                        <div class="container-fluid">
                            <h2 class="h3 mb-2 text-gray-800">Role Details</h2>
                            <div class="card shadow mb-3">
                                <div class="card-header py-3">
                                    <div>
                                        <form onSubmit ={submit}>
                                            <div class="form-group">
                                                <h5 class="h3 mb-2 text-gray-800"> Add Role</h5>
                                                <input class="form-control" type="text" name="roleName" placeholder="Enter roleName" onChange={(e) =>{setroleName(e.target.value)}} />
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
