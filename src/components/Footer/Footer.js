import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <div>
                <Row className='p-5'>
                    <Col xs={6} md={4}>
                        <h3>About</h3>
                        <p className='text-secondary'>In today's healthcare world, convenience is key and this is one of the advantages of telemedicine. Adding virtual care to your practice offers patients simple, on-demand care – without the usual wasted time and cost of most in-person visits.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h3>Services</h3>
                        <h6 className='text-secondary'>Medicine</h6>
                        <h6 className='text-secondary'>Diabetes</h6>
                        <h6 className='text-secondary'>Dental</h6>
                        <h6 className='text-secondary'>Aparoscopic</h6>
                        <h6 className='text-secondary'>Pediatric</h6>
                        <h6 className='text-secondary'>Neurology</h6>
                    </Col>
                    <Col xs={6} md={4} className='footer-link'>
                        <h3>Quick Link</h3>
                        <Link to='/home' style={{ textDecoration: 'none', color: "gray" }}>Home</Link> <br />
                        <Link to='/services' style={{ textDecoration: 'none', color: "gray" }}>Services</Link> <br />
                        <Link to='/appointment' style={{ textDecoration: 'none', color: "gray" }}>Appointment</Link> <br />
                        <Link to='/shop' style={{ textDecoration: 'none', color: "gray" }}>Shop</Link> <br />
                        <Link to='/about' style={{ textDecoration: 'none', color: "gray" }}>About</Link> <br />
                        <Link to='/login' style={{ textDecoration: 'none', color: "gray" }}>Login</Link> <br />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;