import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ClientService = () => {
    const [course, setCourse] = useState([]);
    const { loggedInUser } = useContext(UserContext)

    useEffect(() => {
        fetch('https://protected-spire-97265.herokuapp.com/showOrderService?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    console.log(course);
    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 col-sm-6 p-4 pr-5">
                <h1 className="mt-3">Ordered Services</h1>
                {
                    course.map(course => <div key={course._id} className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 my-3 d-flex justify-content-center">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img style={{ width: "50px" }} className="card-img-top align-self-center" src={`data:image/jpeg;base64,${course.image.img}`} />
                                    <div className="card-body text-center">
                                        <h5 style={{ fontWeight: "600" }} className="card-title">{course.service}</h5>
                                        <p className="card-text text-secondary">{course.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ClientService;