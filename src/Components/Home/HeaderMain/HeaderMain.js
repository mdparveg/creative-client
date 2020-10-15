import React from 'react';
import frame from '../../../images/logos/frame.png';
import Navbar from '../Navbar/Navbar';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="header_container">
            <Navbar></Navbar>
            <main style={{ height: '550px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#111430' }}>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-brand text-white px-5">Hire us</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={frame} alt="" />
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;