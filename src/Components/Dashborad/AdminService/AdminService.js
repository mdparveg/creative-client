import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const AdminService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://protected-spire-97265.herokuapp.com/allOrderdService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5">


                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email ID</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Project Details</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            service.map((service) =>

                                <tr>
                                    <td>{service.name}</td>
                                    <td>{service.email}</td>
                                    <td>{service.service}</td>
                                    <td>{service.description}</td>
                                   <td> <select>
                                <option value="Pending">Pending</option>
                                <option value="On going">On going</option>
                                <option value="Done">Done</option>
                                 <i class="fas fa-sort-down text-dark"></i></select>
                                 </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminService;