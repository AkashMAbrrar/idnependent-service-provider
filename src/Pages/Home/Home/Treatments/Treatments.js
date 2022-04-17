import React from 'react';
import treatment1 from '../../../../images/treat-1.jpg';
import treatment2 from '../../../../images/treat-2.jpg';
import treatment3 from '../../../../images/treat-3.jpg';
import treatment4 from '../../../../images/treat-4.jpg';
import treatment5 from '../../../../images/treat-5.jpg';
import treatment6 from '../../../../images/treat-6.jpg';
import Treatment from '../Treatment/Treatment';


const treatments = [
    { id: 1, day: "Monday", img: treatment1 },
    { id: 2, day: "Tuesday", img: treatment2 },
    { id: 3, day: "Wednesday", img: treatment3 },
    { id: 4, day: "Thursday", img: treatment4 },
    { id: 5, day: "Saturday", img: treatment5 },
    { id: 6, day: "Sunday", img: treatment6 },
];

const Treatments = () => {
    return (
        <div className='container'>
            <h2 className='text-info text-center m-5'>This is my treatments</h2>
            <div className="row">
                {
                    treatments.map(treatment => <Treatment
                        key={treatment.id}
                        treatment={treatment}
                    ></Treatment>)
                }
            </div>
        </div>
    );
};

export default Treatments;