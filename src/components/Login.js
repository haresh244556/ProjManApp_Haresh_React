import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Login = () => {

    var navigate = useNavigate();

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')



    const submit = (e) => {
        e.preventDefault()

        var data = {
            email: email,
            password: password
        }

        axios.post('http://localhost:4000/login', data).then(res => {

            if (res.data.status == 200 && res.data.data.email == "haresh24june@gmail.com") {

                localStorage.setItem('email', res.data.data.email);
                localStorage.setItem('password', res.data.data.password);

                toast.success('🦄 Admin Login Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                setTimeout(() => {
                    navigate("/AdminDashboard")
                }, 2000);

            }
            else if (res.data.status == 200 && res.data.data.email == "mahesh45@gmail.com") {

                localStorage.setItem('email', res.data.data.email);
                localStorage.setItem('password', res.data.data.password);

                toast.success('🦄 Project Manager Login Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                setTimeout(() => {
                    navigate("/ProjectManagerDashboard")
                }, 2000);
            }
            else if (res.data.status == 200 && res.data.data.role.roleName == "Developer") {

                console.log('email', res.data.data.email);
                console.log('password', res.data.data.password);
                console.log('roleName', res.data.data.role.roleName);

                localStorage.setItem('email', res.data.data.email);
                localStorage.setItem('password', res.data.data.password);

                toast.success('🦄 Developer Login Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                setTimeout(() => {
                    navigate("/DeveloperDashboard")
                }, 2000);
            }

            else {
                console.log("Invalid data", res.data.data);
                toast.error('🦄 Invalid Login', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                setTimeout(() => {
                    navigate("/login")
                }, 2000);

            }




        })
    }




    return (
        <div>
            <div id="layoutAuthentication ">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center" >
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5" style={{ background: "aqua" }} >
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" style={{ background: "aliceblue" }} onChange={(e) => { setemail(e.target.value) }} />
                                                    <label htmlfor="inputEmail">Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="inputPassword" type="password" placeholder="Password" style={{ background: "aliceblue" }} onChange={(e) => { setpassword(e.target.value) }} />
                                                    <label htmlfor="inputPassword">Password</label>

                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <Link className="small" to="">Forgot Password?</Link>
                                                    <button type="submit" class="btn btn-primary">Login</button>
                                                </div>
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
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><Link to="/Signup"><h6>Need an account? Sign up!</h6></Link></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}
