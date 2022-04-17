import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, fee } = service;
    const navigate = useNavigate();
    const navigateService = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Fees: ${fee}</p>
            <p>{description}</p>
            <button onClick={() => navigateService(id)} className='btn btn-info'>Booking</button>
        </div>
    );
};

export default Service;