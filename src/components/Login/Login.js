import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import "firebase/auth";
import { SignedInContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [isSignedIn, setIsSignedIn, user, setUser] = useContext(SignedInContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleSignIn = (provider) => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                console.log(user);
                setUser(user);
                setIsSignedIn(true);
                history.replace(from);
            }).catch((error) => {
                let errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleLoginSubmit = (e) => {
        const loginEmail = document.getElementById("login-email").value;
        const loginPassword = document.getElementById("login-password").value;
        const validMail = /\S+@\S+\.\S+/.test(loginEmail);
        if (validMail) {
            firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
                .then((userCredential) => {
                    var user = userCredential.user;
                    setUser(user);
                    setIsSignedIn(true);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });
        } else {
            alert("Invalid Email");
        }
        e.preventDefault();
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">Email</label><br />
                    <input id="login-email" type="email" name="email" required /><br /><br />
                    <label htmlFor="password">Password</label><br />
                    <input id="login-password" type="password" name="password" required /><br /><br />
                    <input type="checkbox" name="remember" />
                    <label htmlFor="remember">Remember Me</label><br /><br />
                    <p>Forgot Password?</p>
                    <input type="submit" value="Submit" /><br />
                </form>
                <p>Don't have an account? <Link to="/create">Create an account</Link></p>
                <p>----------- Or -----------</p>
                <button onClick={() => handleSignIn(googleProvider)} className="google-btn">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;