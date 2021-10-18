import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div>
            <Form className=' m-5 d-flex justify-content-center'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="doctor name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="speciality" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="date" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        make an appointment
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Appointment;