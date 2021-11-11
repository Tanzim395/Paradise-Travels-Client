import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout, setUser, setErrorMessage, setIsLoading } = useAuth();
    const history = useHistory();
    const redirect_uri = '/login';

    const handleLogout = () => {
        logout()
            .then(() => {
                setUser({});
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Navbar bg="success" expand="xl" className="header">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="cursive-text text-decoration-none pink-text fs-3">
                        <img className="w-75" src="https://i.ibb.co/9tsmCmT/Smallfinal.png" alt="" />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="btn" to="/">Home</NavLink>
                        <NavLink className="btn" to="/service">Tour Packs</NavLink>
                        <NavLink className="btn" to="/about">About</NavLink>
                        <NavLink className="btn" to="/team">Our Partners</NavLink>
                        <NavLink className="btn" to="/contact">blog</NavLink>

                        {
                            user.email
                                ?
                                <>
                                    <NavDropdown title={user.displayName} className="fw-bold text-center">
                                        <NavLink className="btn w-100 no-focus bg-primary" to="/manageAllOrders">Manage All Orders</NavLink>
                                        <NavLink className="btn w-100 no-focus bg-warning" to="/addNewService">Add A New Service</NavLink>
                                    </NavDropdown>

                                    <button onClick={handleLogout} className="btn btn-primary btn-padding">
                                        Logout
                                    </button>

                                    <NavLink className="btn btn-danger px-4" to="/myOrders">
                                        My Orders
                                    </NavLink>
                                </>
                                :
                                <NavLink className="btn btn-danger px-5" to="/login">
                                    Login
                                </NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;