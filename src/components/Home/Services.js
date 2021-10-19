import React from 'react';
import Service from './Service';
import { useEffect, useState } from 'react';

const Services = () => {
    const [departments, setDepartment] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDepartment(data));
    }, [])
    return (
        <div>
            <h1 className='mt-5'>Our Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                {
                    departments.slice(0, 6).map(department => <Service
                        key={department.id}
                        department={department}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;