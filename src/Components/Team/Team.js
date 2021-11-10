import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Team.css';

const Team = () => {
    return (
        <Container className="my-4">
            <div className="mb-4 text-center bg-light service-banner">
                <h4 className="display-6 cursive-text service-title">
                    Team
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            We are a small team of talented professionals with a wide range of skills and experience
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            We love what we do, and we do it with passion. We look forward to
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            finding your dream vacation.
                        </small>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/fFs8gmQ/22.jpg" alt="female" />
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Judy Schultz</h4>
                        <p className="text-muted small-text">
                            With 15+ years of experience in the travel industry, Judy has travelled around the world more than once.
                        </p>
                        <NavLink to="service" className="btn btn-danger px-5">Service</NavLink>
                    </div>
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Jake Miller</h4>
                        <p className="text-muted small-text">
                            Jake is passionate about travelling, hiking and discovering new places. He has a good idea about different places in the world.
                        </p>
                        <NavLink to="service" className="btn btn-danger px-5">Service</NavLink>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/LrvCqpJ/23.jpg" alt="male" />
                </div>
            </div>
        </Container>
    );
};

export default Team;