import React from 'react';

const Footer = () => {
    return (
        <div className="footer bg-dark text-light">
            <div className="row">
                <div className="col-md-3 p-5">
                <h3 className="text-info">Yoga<span className="text-secondary">Burn</span></h3>
                    <ul className="navbar-nav">
                        <li>001 Elizabeth Ave Str, Brooklyn, CA, 001</li>
                        <li>+1234567890</li>
                        <li>yogaburn@example.com</li>
                    </ul>
                </div>
                <div className="col-md-3 p-5">
                    <h3>About Us</h3>
                    <ul className="navbar-nav">
                        <li>Mission and vission</li>
                        <li>Our Approach</li>
                        <li>Join a Career</li>
                    </ul>
                </div>
                <div className="col-md-6 p-5">
                    <h3>Subscribe to Our NewsLetter</h3>
                    <input type="email" placeholder="Enter Your Email" className="form-control mt-3" /><br />
                    <button className="btn btn-warning">Subscribe now</button>
                </div>
            </div>
            {/* copyright  */}
            <p className="text-center border-top">Copyright LearnBridge &copy; 2021. All Rights Reserved</p>
        </div>
    );
};

export default Footer;