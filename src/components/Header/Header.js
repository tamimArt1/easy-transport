import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignedInContext } from '../../App';
import './Header.css';

const Header = () => {
    const [isSignedIn, setIsSignedIn, user, setUser] = useContext(SignedInContext);
    console.log("header", user);
    return (
        <div className="header-main">
            <div className="header-text">
                Easy Transport
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/destination" style={{ textDecoration: 'none' }}>Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
                    </li>
                </ul>
                {isSignedIn ? <h3>{user.email}</h3> : <Link to="/login" style={{ marginTop: '10px' }}><button className="btn">Login</button></Link>}
            </div>
        </div>
    );
};

export default Header;