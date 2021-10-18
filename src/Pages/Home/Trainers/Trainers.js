import React, { useEffect, useState } from 'react';

const Trainers = () => {
    
    const [trainers, setTrainers] = useState([]);

    // load data

    useEffect(() =>{
        fetch('/trainer.JSON')
        .then(res=> res.json())
        .then(data => setTrainers(data));
    }, [])
    return (
        <div className="p-5">
              <h1 className="text-center mb-4 text-info">Our Popular Trainers</h1>
            
            <div className="row">
            {
            trainers?.map((trainer) => (
                <div className="col-md-3">
                    <div className="card m-1">
                        <img className="card-img-top" src={trainer.img} alt="" />
                
                        <div className="card-body">
                    
                            <h4 className="card-title">{trainer.name}</h4>
                            <h6>Ratings: <span className="text-warning fs-4">{trainer.ratings}</span> ({trainer.reviews} reviews)</h6>
                    
                        </div>  
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Trainers;