import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h2 className="text-info">Yoga<span className="text-secondary">Burn</span></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <NavLink as={HashLink} to="/home#home" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item text-decoration-none p-4 align-items-center">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item  text-decoration-none p-4">
                        <li>About us</li>
                    </NavLink>
                    <NavLink as={HashLink} to="/serviceDetail" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item text-decoration-none p-4">
                        <li>Services</li>
                    </NavLink>
                    <NavLink to="/faq" activeStyle={{ color: 'black', fontSize: '1.3rem'}} className="nav-item text-decoration-none p-4">
                        <li>FAQs</li>
                    </NavLink>
                    <NavLink to="/contact" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item text-decoration-none p-4">
                        <li>Contact us</li>
                    </NavLink>
                        
                    <NavLink to="/signin" className="nav-item text-decoration-none p-4">
                        <li className="btn btn-primary">Sign Up</li>
                    </NavLink>

                    {user?.email ?
                            <button onClick={logOut}>Logout</button> :
                            <NavLink as={Link} to="/signin">Login</NavLink>}
                        <p>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </p>
                    
                </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;