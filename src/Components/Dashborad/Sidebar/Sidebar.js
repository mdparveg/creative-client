import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faHdd, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo1.png'
import { UserContext } from '../../../App';


const Sidebar = () => {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    useEffect(() => {
        fetch(`https://protected-spire-97265.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const adminUser = { ...loggedInUser };
                    adminUser.setUser = true;
                    setLoggedInUser(adminUser)
                }
                else {
                    const adminUser = { ...loggedInUser };
                    adminUser.setUser = false;
                    setLoggedInUser(adminUser)
                }
            })
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "500px" }}>
            <Link to="/">
                <img height="47px" width="150px" src={logo} alt="" />
            </Link>
            <ul className="list-unstyled mt-5">
                {
                    loggedInUser.setUser ?
                        <div>
                            <li>
                                <Link className="text-dark" to="/adminService">
                                    <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/addService">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>
                        :
                        <div className="my-5">
                            <li>
                                <Link className="text-dark" to="/order">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/clientService">
                                    <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/review">
                                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                </Link>
                            </li>
                        </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;

