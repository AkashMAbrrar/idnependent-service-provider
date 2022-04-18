import React from 'react';
import myself from '../../../images/myselfe.jpg'


const About = () => {
    return (
        <div className='container d-flex justify-center bg-dark rounded'>
            <div className='m-5 p-5 bg-gray text-center text-white '>
                <p>Hi, I am Akash Muhammad Abbrar. I am student of hons.second Year.I want to become a programmer.My
                    Programming allows us more freedom than regular jobs. Most programming job openings are remote, giving us enough flexibility to carry out our tasks. Programming jobs will enable me to work wherever i want, especially if i have a strong reputation.And That's why i want to become a programmer.
                </p>
            </div>
            <div>
                <img style={{ width: "250px" }} src={myself} alt="" />
            </div>

        </div>
    );
};

export default About;