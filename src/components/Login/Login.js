import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    // Google sign-in 
    const hangleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    //Email login 
    const handleEmailLogin = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Invalid email or password')
            return;
        }
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                history.push(redirect_uri);
                // const user = result.user;
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            });

    }
    return (
        <div>
            <div className=' m-5 w-50'>
                <h3>Please Login</h3>
                <div>
                    <h2 className='text-danger'>{error}</h2>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Email address</Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">Password</Form.Label>
                        <Col sm="10">
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>

                    <Button onClick={handleEmailLogin} variant="primary" type="submit">
                        Sign In
                    </Button> <br /> <br />
                    <p>New user? <Link to='/register'>Create an account</Link>
                    </p>
                    <p>---------or----------</p>
                    <Button onClick={hangleGoogleLogin} variant="primary" type="submit">
                        Google Sing In
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;