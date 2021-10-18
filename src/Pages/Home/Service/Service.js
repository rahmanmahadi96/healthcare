import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { id, title, price, speciality, img } = service;
    return (
        <div className="col-md-4 p-3">
            <div className="card">
            <img className="card-img-top" src={img} alt="" />
            <div className="card-body">
            <h3>{title}</h3>
            <h5>Price: {price}$</h5>
            <h5>{speciality}</h5>
            <Link to={`/serviceDetails/${id}`}>
                <button className="btn btn-warning">More Details</button>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default Service;