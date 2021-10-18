import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark " sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Health Point</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/appointment#appointment">Appointment</Nav.Link>
                        <Nav.Link as={Link} to="/shop#shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="secondary">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;