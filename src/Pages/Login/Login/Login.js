import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSign, handleEmail, handleRegister, handlePass, togglelogIn, isLogIn,error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/serviceDetails';

    const googleSgnIn = () => {
        handleGoogleSign()
        .then(result => {
            console.log(result.user);
            history.push(redirect_uri);
        })
    }
    return (
        <div className="p-5">
             
                <h2>Login</h2>
                <form onSubmit={handleRegister} className="p-3">
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePass} className="my-2" type="password" name="" id="" placeholder="Enter password"/>
                    <br />
                    <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                         <div className="form-check">
                           <input onChange={togglelogIn} className="form-check-input" type="checkbox" id="gridCheck1"/>
                           <label className="form-check-label" htmlFor="gridCheck1">
                             Already Registred?
                           </label>
                        </div>
                       </div>
                     </div>
                     <button type="submit" className="btn btn-primary">{ isLogIn ? 'Log In' : 'Register'}</button>
                </form>
                <p>new to YogaBurn? <Link to="/register">Create Account</Link></p>
                <button className="btn btn-warning" onClick={googleSgnIn}>Google Sign In</button>
            
        </div>
    );
};

export default Login;