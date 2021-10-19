import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // set user name 
    const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const handleEmailRegistration = e => {
        e.preventDefault();
        // registration 
        const auth = getAuth();
        if (name === '') {
            setError('please enter your name')
            return;
        }
        else if (email === '') {
            setError('please enter your email')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must contain at least 1 uppercase')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user;
                setUserName();
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
        // console.log(email, password);

    }
    return (
        <div>

            <div className=' m-5 w-50'>
                <h3>Please Registration </h3>
                <div>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={handleNameChange} type="email" placeholder="Enter your name" />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Email address</Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">Password</Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <h3 className='text-danger'>{error}</h3>
                    <Button onClick={handleEmailRegistration} variant="primary" type="submit">
                        Register
                    </Button>
                    <br /> <br />
                    <p>---------or----------</p>
                    <p>already register? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;