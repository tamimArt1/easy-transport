import React from 'react';
import './Card.css';

const Card = ({ name, picture }) => {
    return (
        <div className="card-body">
            <img src={picture} alt="pic" />
            <h3>{name}</h3>
        </div>
    );
};

export default Card;