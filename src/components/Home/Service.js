import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, Speciality, name, img, description } = props.department;
    return (
        <div className="col">
            <div className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                <h1 className='text-info'>{Speciality}</h1>
                <div>
                    <img src={img} className="card-img-top w-100 " alt="..." />
                </div>
                <div className="card-body">
                    <h5>Name :<span className="text-primary"> {name}</span></h5>
                    <p>Description : {description}</p>
                </div>
                <Link to={`/department/${id}`}>
                    <button className='btn btn-primary'>{Speciality}</button>
                </Link>
            </div>
        </div >
    );
};

export default Service;