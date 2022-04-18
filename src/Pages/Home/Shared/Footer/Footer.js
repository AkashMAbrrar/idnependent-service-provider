import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-dark text-white pt-5 mt-5 pb-5'>
            <p><small>Copyright for {year}</small></p>
            <small>I will always active for your services and help.</small>
        </footer>
    );
};

export default Footer;