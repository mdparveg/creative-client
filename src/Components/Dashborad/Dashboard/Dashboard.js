import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    background: '#F4FDFB',
    height: '100%'
}

const textStyle = {
    margin: '0 auto',
    paddingTop: '200px'
}

const Dashboard = () => {
    return (
        <div style={containerStyle} className="container-fluid row">
            <Sidebar></Sidebar>
            <h1 style={textStyle} className="text-center">Select Any Option From Sidebar</h1>
        </div>
    );
};

export default Dashboard;