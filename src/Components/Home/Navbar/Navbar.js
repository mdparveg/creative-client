import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="nav_logo">
            <img style={{height: '47px', width: '150px'}} className="ml-5 navbar-brand img-fluid"  src={logo} alt=""/>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="#">Our Portfolio</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link mr-5" to="/">Our Team<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-4 text-white btn btn-brand mr-5" to="/login">Login</Link>
                    </li> 
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;