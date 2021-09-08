import React from 'react';
import map from '../../images/Map.png';
import car from '../../images/car.png';
import bike from '../../images/bike.png';
import bus from '../../images/bus.png';
import train from '../../images/train.png';
import people from '../../images/peopleicon.png';
import './FinalDestination.css';
import { useParams } from 'react-router';

const FinalDestination = () => {
    let transport;
    const fromPlace = document.getElementById("from-place").value;
    const toPlace = document.getElementById("to-place").value;
    const { vehicle } = useParams();
    if (vehicle === "car") { transport = car; }
    if (vehicle === "bike") { transport = bike; }
    if (vehicle === "bus") { transport = bus; }
    if (vehicle === "train") { transport = train; }
    return (
        <div className="destination-container">
            <div className="final-destination">
                <h3>* {fromPlace}</h3>
                <h3>|</h3>
                <h3>* {toPlace}</h3>
                <div className="ride-detail">
                    <img src={transport} alt="car" />
                    <h3>Car</h3>
                    <img src={people} alt="people" />
                    <h3>4</h3>
                    <h3>$67</h3>
                </div>
                <div className="ride-detail">
                    <img src={transport} alt="car" />
                    <h3>Car</h3>
                    <img src={people} alt="people" />
                    <h3>4</h3>
                    <h3>$67</h3>
                </div>
                <div className="ride-detail">
                    <img src={transport} alt="car" />
                    <h3>Car</h3>
                    <img src={people} alt="people" />
                    <h3>4</h3>
                    <h3>$67</h3>
                </div>
            </div>
            <div className="map1">
                <img src={map} alt="map-pic" />
            </div>
        </div>
    );
};

export default FinalDestination;