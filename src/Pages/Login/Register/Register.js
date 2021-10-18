import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { handleEmail, handleRegister, handlePass, isLogIn} = useAuth();
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister} className="p-3">
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePass} className="my-2" type="password" name="" id="" placeholder="Enter password"/>
                    <br />
                    
                     <button type="submit" className="btn btn-primary">{ isLogIn ? 'Log In' : 'Register'}</button>
                </form>
                <p>already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
    );
};

export default Register;