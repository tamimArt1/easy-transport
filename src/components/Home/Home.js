import React from 'react';
import Card from '../Card/Card';
import './Home.css';
import bike from '../../images/bike.png';
import car from '../../images/car.png';
import bus from '../../images/bus.png';
import train from '../../images/train.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const getName = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className="home-main">
            <h1>Travelling Is Easier Than Before</h1>
            <h1>Select Your Ride</h1>
            <div className="cards">
                <Link to="/destination/bike" style={{ textDecoration: 'none' }}><Card name="BIKE" picture={bike}></Card></Link>
                <Link to="/destination/car" style={{ textDecoration: 'none' }}><Card name="CAR" picture={car}></Card></Link>
                <Link to="/destination/bus" style={{ textDecoration: 'none' }}><Card name="BUS" picture={bus}></Card></Link>
                <Link to="/destination/train" style={{ textDecoration: 'none' }}><Card name="TRAIN" picture={train}></Card></Link>
            </div>
        </div>
    );
};

export default Home;