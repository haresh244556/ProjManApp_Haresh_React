import React from 'react'
import { Link } from 'react-router-dom'



export const Login = () => {

    return (
        <div>
        <div id="layoutAuthentication ">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center" >
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5" style={{background:"aqua"}} >
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4"><strong>Login</strong></h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com"style={{background:"aliceblue"}} />
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputPassword" type="password" placeholder="Password" style={{background:"aliceblue"}} />
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link class="small" to="password.html">Forgot Password?</Link>
                                                <Link class="btn btn-primary" to="/AdminDashboard">Login</Link>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><Link to="/Signup">Need an account? Sign up!</Link></div>
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
