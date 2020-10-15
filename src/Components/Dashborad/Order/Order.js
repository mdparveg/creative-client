import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const {id} = useParams()
    const {service,  loggedInUser} = useContext(UserContext);
    const serviceOrder = service.find(sr => sr._id === id);
    const {image, des} = serviceOrder;
    const {name, email} = loggedInUser;

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {...loggedInUser, service: serviceOrder.name, description: des, image: image }
        fetch('https://protected-spire-97265.herokuapp.com/orderService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push("/clientService")
            }
        })
    }
    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5">
                <h3 className="mt-3">Order</h3>
                <div style={{ background: "#E5E5E5" }}>
                    <form style={{ width: "50%" }} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="Name">Name</label>
                            <input value={name} type="text" className="form-control"
                                name="name"
                                placeholder="Type your name" />
                        </div>
                        <div className="form-group">
                            <label for="Email">Email</label>
                            <input value={email} type="email" className="form-control"
                                name="email"
                                placeholder="Type your email" />
                        </div>
                        <div className="form-group">
                            <label for="Service">Service</label>
                            <input type="text" value={serviceOrder.name} className="form-control"
                                name="service"
                                placeholder="Service Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input value={des} type="text" className="form-control" name="des" placeholder="Description" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;