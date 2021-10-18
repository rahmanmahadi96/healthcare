import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner p-5 text-light">
            <h1>Do not hold your breath, hold your posture</h1>
            <h5 className="my-3">Join with YogaBurn, Feel the Difference</h5>
            <Link to="/register"><button  className="btn btn-danger">Join Now</button></Link>
        </div>
    );
};

export default Banner;