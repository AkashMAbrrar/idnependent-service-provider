import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, fee } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Fees: ${fee}</p>
            <p>{description}</p>
            <button className='btn btn-info'>Booking</button>
        </div>
    );
};

export default Service;