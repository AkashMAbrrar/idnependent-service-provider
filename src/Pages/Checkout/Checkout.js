import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId: checkoutId } = useParams()
    return (
        <div>
            <h2>Welcome To  detail: {checkoutId}</h2>
        </div>
    );
};

export default Checkout;