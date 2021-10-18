import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import setUser from '../../hooks/useFirebase';
// import setIsLoading from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const hangleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                // setUser(result.user);
            })
        // .finally(() => setIsLoading(false))
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleEmailRegistration = e => {
        console.log(email, password);
        e.preventDefault();
    }
    return (
        <div>
            <div className=' m-5 d-flex justify-content-center'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={handleEmailRegistration} variant="primary" type="submit">
                        Sign In
                    </Button>
                    <br /> <br />
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