import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import "firebase/auth";
import './CreateUser.css';
import { SignedInContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const CreateUser = () => {
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
                setUser(user);
                setIsSignedIn(true);
                history.replace(from);
            }).catch((error) => {
                let errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleCreateSubmit = (e) => {
        const newEmail = document.getElementById("new-email").value;
        const newPassword = document.getElementById("new-password").value;
        const newConfirmPassword = document.getElementById("new-password-confirm").value;
        if (newPassword !== newConfirmPassword) {
            alert("Password don't match");
            return;
        }
        const validMail = /\S+@\S+\.\S+/.test(newEmail);
        if (validMail) {
            firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
                .then((userCredential) => {
                    let newUser = userCredential.user;
                    setUser(newUser);
                    setIsSignedIn(true);
                    history.replace(from);
                })
                .catch((error) => {
                    let errorMessage = error.message;
                    console.log(errorMessage);
                });
        } else {
            alert("Invalid Email");
        }
        e.preventDefault();
    }

    return (
        <div className="create-container">
            <div className="create-box">
                <h1>Create an account</h1>
                <form onSubmit={handleCreateSubmit}>
                    <label htmlFor="name">Name</label><br />
                    <input id="new-name" type="text" name="name" required /><br /><br />
                    <label htmlFor="email">Email</label><br />
                    <input id="new-email" type="email" name="email" required /><br /><br />
                    <label htmlFor="password">Password</label><br />
                    <input id="new-password" type="password" name="password" required /><br /><br />
                    <label htmlFor="confirm-password">Confirm Password</label><br />
                    <input id="new-password-confirm" type="password" name="confirm-password" required /><br /><br />
                    <input type="submit" value="Submit" /><br /><br />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p>----------- Or -----------</p>
                <button onClick={() => handleSignIn(googleProvider)} className="google-btn">Continue with Google</button>
            </div>
        </div>
    );
};

export default CreateUser;