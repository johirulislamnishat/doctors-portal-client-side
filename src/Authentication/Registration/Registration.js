import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import useAuth from '../Hooks/useAuth';
import './Registration.css';
import image from '../../images/auth.png';
import { useLocation, useHistory } from 'react-router-dom';

const Registration = () => {

    // local storage 
    const [user, setUser] = useState({});

    const [signupData, setSignupData] = useState({});
    const { authError, signUpUsingEmail, isLoading, signInUsingGoogle, saveUser } = useAuth();

    // redirect 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSignupData = { ...signupData };
        newSignupData[field] = value;
        setSignupData(newSignupData);
    }

    const handleSignUp = e => {
        e.preventDefault();
        console.log(signupData)

        if (signupData.password !== signupData.retypePassword) {
            alert('Please Enter Correct Password');
            return
        }
        signUpUsingEmail(signupData.email, signupData.password, signupData.displayName)

        //redirect 
        history.push(redirect_uri);
        // console.log(signupData.email);
        setUser(signupData.email);
        localStorage.setItem("email", signupData.email);

        alert('Registration Success!!!')

    }

    //ggl login 
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
            .then(result => {

                //redirect
                history.push(redirect_uri);

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                //local storage
                setUser(result.user);
                localStorage.setItem("email", result.user.email);
                // console.log(result.user);
            })
    }

    return (
        <>
            <Header />

            <div className="mt-5 container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className=" col-md-6 d-flex justify-content- center align-items- center">
                            <div className="card1 pb-5">

                                <div className="row px-3 mt-4 mb-5 border-line"> <img src={image} className="image" alt='icon' /> </div>
                            </div>
                        </div>
                        <div className=" col-md-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div>

                                    <h2>Create an Account</h2>
                                    <p className="hint-text">Sign up with your social media account or email address</p>
                                    <div className="social-btn text-center">

                                        <button onClick={handleGoogleLogin} href="#" className="btn btn-danger btn-lg"><i className="fab fa-google-plus-g"></i> Google</button>
                                        <button className="btn btn-info btn-lg"><i className="fab fa-twitter"></i> Twitter</button>

                                    </div>
                                    <div className="or-seperator"><b>or</b></div>
                                    <form onSubmit={handleSignUp}>
                                        <div className="form-group">
                                            <input onChange={handleOnChange} type="text" className="form-control input-lg" name="displayName" placeholder="Username" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input name='email' onChange={handleOnChange} type="email" className="form-control input-lg" placeholder="Email Address" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input name='password' onChange={handleOnChange} type="password" className="form-control input-lg" placeholder="Password" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={handleOnChange} type="password" className="form-control input-lg" name="retypePassword" placeholder="Confirm Password" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
                                        </div>
                                    </form>

                                    {/* error  */}

                                    {
                                        authError && <div>{authError}</div>
                                    }

                                </div>

                                <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <Link to='/login' className="text-danger ">Login</Link></small> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Registration;