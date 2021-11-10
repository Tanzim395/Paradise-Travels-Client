import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white bg-success">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Paradsie Travels</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#ff1d5e", height: "2px" }}
                            />
                            <p className="small-text footer-about">
                                This is a Paradsie Travels web application. Here you can booked different types tours and travels offers and packages and track your orders. You can also post a tour and package.
                            </p>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold ">Service</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#ff1d5e", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none small-text">
                                    Tour
                                </NavLink>
                            </p>


                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none small-text">
                                    Holiday
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none small-text">
                                    Vacation
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none small-text">
                                    Hotel
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#ff1d5e", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/" className="text-white text-decoration-none small-text">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none small-text">
                                    Service
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none small-text">
                                    About
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/contact" className="text-white text-decoration-none small-text">
                                    Contact
                                </NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold ">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#ff1d5e", height: "2px" }}
                            />

                            <p className="small-text">
                                <i className="fas fa-home mr-3"></i>
                                Dhaka, Gulshan 1212, Bangladesh
                            </p>

                            <p className="small-text">
                                <i className="fas fa-envelope mr-3"></i>
                                paradisetravels@hotmail.com
                            </p>

                            <p className="small-text">
                                <i className="fas fa-phone mr-3"></i>
                                +880 199 999 888
                            </p>

                            <p className="small-text">
                                <i className="fas fa-print mr-3"></i>
                                +880 199 999 888
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3 small-text"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <span className="me-2">© Paradise Travels,</span>

                <NavLink to="/" className="text-white text-decoration-none">
                    2021
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;