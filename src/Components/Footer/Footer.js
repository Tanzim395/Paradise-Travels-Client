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
                                This website is for paradise Travels Agency. Where you can book, add, manage tour pack and services. You can consider this site as your online service and gateway authentication reliable.
                            </p>
                        </div>



                        {/* Useful links */}

                        <img className="w-25 img-fluid" src="https://www.sslcommerz.com/wp-content/uploads/2021/06/Payment-Brands.jpg" alt="" />

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <div>
                                <h2>Our Location</h2>
                                <article>P.O. Box 222
                                    Knightdale, NC 27545
                                    Phone (919) 217-0062
                                    Fax (919) 266-6386

                                    Email paradisetravels1@aol.com</article>
                            </div>
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