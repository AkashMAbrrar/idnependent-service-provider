import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, fee } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Fees: ${fee}</p>
            <button>Booking</button>
        </div>
    );
};

export default Service;