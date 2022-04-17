import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center m-5'>
            <h2>This is footer {year}</h2>
        </footer>
    );
};

export default Footer;