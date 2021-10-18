import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSign} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

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
                <form className="p-3">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="my-2" type="password" name="" id="" placeholder="Enter password"/>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <p>new to YogaBurn? <Link to="/register">Create Account</Link></p>
                
                <button className="btn btn-warning" onClick={googleSgnIn}>Google Sign In</button>
            
        </div>
    );
};

export default Login;