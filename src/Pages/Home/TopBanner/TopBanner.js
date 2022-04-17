import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
import banner3 from '../../../images/banner/banner-3.jpg';

const TopBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-70"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Take Medication At Your Mobile Phone</h3>
                    <p>I am always ready to help you vertualy.When you need any services just go to our site and registration our form.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-70"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-info'>Medicine Delivery</h3>
                    <p className='text-dark'>If you need any serious medicine then you can order in online.i will send it in 4 hours at your home.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-70"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Any Medical Test What You Need</h3>
                    <p className='text-dark'>
                        This is my personal Clinic.I am always ready to providing any kind of service what you need.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;