import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import useAuth from '../Hooks/useAuth';
import './Login.css'

const Login = () => {


    const [loginData, setLoginData] = useState({});
    const { authError, isLoading, signInUsingEmail, signInUsingGoogle, saveUser } = useAuth();

    // session storage 
    const [user, setUser] = useState({});

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        signInUsingEmail(loginData.email, loginData.password, location, history)

        //redirect
        history.push(redirect_uri);
        // console.log(loginData.email);
        //session storage
        setUser(loginData.email);
        sessionStorage.setItem("email", loginData.email);

        alert('Login Success!!!')
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
            .then(result => {

                //redirect
                history.push(redirect_uri);

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                //session storage
                setUser(result.user);
                sessionStorage.setItem("email", result.user.email);
                // console.log(result.user);
            })
    }

    return (
        <>
            <Header />

            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div class="card card0 border-0">
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="card1 pb-5">
                                <div class="row"> <img src="https://i.imgur.com/CXQmsmF.png" class="logo" alt='icon' /> </div>
                                <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image" alt='icon' /> </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card2 card border-0 px-4 py-5">
                                <div>
                                    <form onSubmit={handleLogin}>
                                        <h2>Sign In Your Account</h2>
                                        <p class="hint-text">Sign in with your social media account or email address</p>
                                        <div class="social-btn text-center">

                                            <button onClick={handleGoogleLogin} href="#" class="btn btn-danger btn-lg"><i class="fab fa-google-plus-g"></i> Google</button>
                                            <button class="btn btn-info btn-lg"><i class="fab fa-twitter"></i> Twitter</button>

                                        </div>
                                        <div class="or-seperator"><b>or</b></div>
                                        <div class="form-group">
                                            {/* <input type="text" class="form-control input-lg" name="username" placeholder="Username" required="required" /> */}
                                        </div>
                                        <div class="form-group">
                                            <input name='email' onChange={handleOnChange} type="email" class="form-control input-lg" placeholder="Email Address" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <input name='password' onChange={handleOnChange} type="password" class="form-control input-lg" placeholder="Password" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-success btn-lg btn-block signup-btn">Sign In</button>
                                        </div>
                                    </form>

                                    {/* error  */}

                                    {
                                        authError && <div>{authError}</div>
                                    }

                                </div>

                                <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <Link to='/registration' class="text-danger ">Register</Link></small> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>


    );
};

export default Login;