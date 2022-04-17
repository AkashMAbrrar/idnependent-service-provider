import React from 'react';
import notfounda from '../../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger text-center'>The Page Is Not Found</h1>
            <img src={notfounda} alt="" />
        </div>
    );
};

export default NotFound;