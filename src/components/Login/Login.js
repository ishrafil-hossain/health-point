import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import setUser from '../../hooks/useFirebase';
// import setIsLoading from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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

    const handleEmailLogin = e => {
        e.preventDefault();
        console.log(email, password);
        // login 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            });

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

                    <Button onClick={handleEmailLogin} variant="primary" type="submit">
                        Sign In
                    </Button>
                    <br /> <br />
                    <p>---------or----------</p>
                    <p>New user? <Link to='/register'>Create an account</Link></p>

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