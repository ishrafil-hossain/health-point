import React from 'react';
import notfound from './404.png';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={notfound} alt="" />
            <div className='text-dark, bg-info'>
                <Nav.Link as={Link} to="/home#home">Go back</Nav.Link>
            </div>
        </div>
    );
};

export default NotFound;