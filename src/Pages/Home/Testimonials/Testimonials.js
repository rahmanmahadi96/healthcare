import React from 'react';

const Testimonials = () => {
    return (
        <div className="testimonial p-5">
            <div className="headings text-center">
                <h5 className="text-info my-2">Our Testimonials</h5>
                <h1>What Our Clients Think About Us</h1>
            </div>


            <div className="card-group container my-5">

                <div className="card shadow-lg">
                    <img src="./images/test1.jpeg" className="card-img-top" alt="client 1"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Nuno Gueye</h5>
                            <small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i             className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></small>
                        </div>
                        <p className="card-text">Relaxed, down to earth and welcoming. Class was challenging but with different options to suit different people. Left feeling like I’d had a workout but also surprisingly chilled out!</p>
                    </div>
                </div>

                <div className="card mx-3 shadow-lg">
                    <img src="./images/test2.jpeg" className="card-img-top" alt="client 2"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Ellysa Hili</h5>
                            <small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small>
                        </div>
                        <p className="card-text">Mahadi is an excellent teacher. His classes are energising and fun. I also really like the meditation at the end, it leaves me feeling very relaxed and centered. </p>
                    </div>
                </div>

                <div className="card shadow-lg">
                    <img src="./images/test3.jpeg" className="card-img-top" alt="client 3"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Allison Becker</h5>
                            <small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star "></i></small>
                        </div>
                        <p className="card-text">Mahdiya is a fantastic teacher, and also a genuinely lovely person (which I feel is important when you’re listening to someone talk at you for an hour or more). </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;