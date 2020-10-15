import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config'
import './Login.css'
import logo from '../../../images/logos/logo.png';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const {setLoggedInUser} = useContext(UserContext)
  const history = useHistory()
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser)
      history.replace(from)
      storeAuthToken()
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function (error) {
        // Handle error
      });
  }


  return (
    <>
      <div className="login_logo m-5">
        <img className="img-fluid" src={logo} alt="" />
      </div>
      <div style={{ width: "100vh", height: "50vh" }} className="login-page container justify-content-center align-items-center">
        <div className="shadow p-5">
          <h1 className="text-center p-3">Login With</h1>
            <button className="btn btn-white" onClick={handleGoogleSignIn}>Continue With Google</button>
          <div>
            <p>Don't have an account? <span onClick={handleGoogleSignIn}>Create an account</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;