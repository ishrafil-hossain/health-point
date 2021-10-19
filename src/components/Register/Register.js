import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must contain at least 1 uppercase')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
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
            <h3>Please Registration </h3>
            <div className=' m-5 d-flex justify-content-center'>

                <div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="email" placeholder="Enter your name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <h3>{error}</h3>
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