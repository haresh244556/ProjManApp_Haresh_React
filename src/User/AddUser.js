import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../Admin/Header';
import  Sidebar  from '../Admin/Sidebar';
import { MainContent } from '../Admin/MainContent';
import { Footer } from '../Admin/Footer';

export const AddUser = () => {
    const[firstName,setfirstName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [roleId, setroleId] = useState('')
    
    var data ={
        firstName: firstName,
        email:email,
        password:password,
        role:roleId
    }
    const submit = (e)=>{

        e.preventDefault()
        axios.post('http://localhost:4000/users',data).then(res => {
            console.log(res.status)
            console.log(res.data)
            alert("User added successfuly...")
            
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
                            <h2 class="h3 mb-2 text-gray-800">User Details</h2>
                            <div class="card shadow mb-3">
                                <div class="card-header py-3">
                                    <div>
                                        <form onSubmit ={submit}>
                                            <div class="form-group">
                                                <h5 class="h3 mb-2 text-gray-800"> Add User</h5>
                                                <input class="form-control" type="text" name="userName" placeholder="Enter UserName" onChange={(e) =>{setfirstName(e.target.value)}} required/>
                                                <input class="form-control" type="email" name="email" placeholder="Enter email" onChange={(e) =>{setemail(e.target.value)}} required />
                                                <input class="form-control" type="password" name="password" placeholder="Enter password" onChange={(e) =>{setpassword(e.target.value)}} required />
                                                <input class="form-control" type="id" name="roleId" placeholder="Enter roleId" onChange={(e) =>{setroleId(e.target.value)}} required />
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

