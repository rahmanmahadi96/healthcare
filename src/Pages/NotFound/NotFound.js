import React from 'react';
import { NavLink } from 'react-router-dom';


// error message 
const NotFound = () => {
    return (
        <div className="error container p-5 text-center">
            <h1>404</h1>
            <h1>Not Found</h1>
            <NavLink to="/home" className="btn btn-primary">Back to Homepage</NavLink>
        </div>
    );
};

export default NotFound;