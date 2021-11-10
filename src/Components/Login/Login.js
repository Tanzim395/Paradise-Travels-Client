import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const {
        loginWithGoogle,
        setUser,
        errorMessage,
        setErrorMessage,
        setIsLoading
    } = useAuth();

    const handleGoogleLogin = () => {
        setErrorMessage("");
        loginWithGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="light-bg">
            <div className="container login">
                {/* Error Message */}
                {errorMessage ? <div className="alert alert-danger text-center mb-5">
                    {errorMessage ? <h6 className="text-danger">{errorMessage}</h6> : null}
                </div> : null}

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {/* Login Form */}
                    <div className="col">
                        <div className="d-flex justify-content-center h-100">
                            <div className="user_card">
                                <div className="d-flex justify-content-center form_container">
                                    <button
                                        className="btn btn-light border fw-normal px-5"
                                        onClick={handleGoogleLogin}>
                                        <img className="google-logo img-fluid me-2" src="https://i.ibb.co/jbBwfgT/google-logo-9808.png" alt="google logo" />

                                        <span className="small-text">Login With Google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col text-center">
                        <p><i>“Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide</i></p>
                        <h2 className="text-primary font-bolder">Join to the Paradise Travellers through a click way</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;