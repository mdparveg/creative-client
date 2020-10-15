import React, { createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashborad/Dashboard/Dashboard';
import AddService from './Components/Dashborad/AddService/AddService';
import Order from './Components/Dashborad/Order/Order';
import { useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ClientService from './Components/Dashborad/ClientService/ClientService';
import Review from './Components/Dashborad/Review/Review';
import AdminService from './Components/Dashborad/AdminService/AdminService';
import MakeAdmin from './Components/Dashborad/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {

  const [service, setService] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, service, setService}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/clientService">
            <ClientService></ClientService>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/adminService">
            <AdminService></AdminService>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
