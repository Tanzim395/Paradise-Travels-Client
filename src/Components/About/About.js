import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container className="my-4">
            <div className="mb-4 text-center bg-light service-banner">
                <h4 className="display-6 cursive-text service-title">
                    About
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            Paradise Travels is not your average travel agency. For over ten years we have been creating
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            tailor-made vacations. We have thousands of happy customers
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            all around the world.
                        </small>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Tailored</h4>
                        <p className="text-muted small-text">
                            Every vacation we create is unique and
                            tailored just for you. Tell us where you
                            want to go. We hand-select the hotels and activities
                            that we work with regularly. Our quality
                            is our priority.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/vh3QBnV/24.jpg" alt="nature" />
                </div>


                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/RDxYpdQ/25.jpg" alt="nature" />
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Philosophy</h4>
                        <p className="text-muted small-text">
                            Our philosophy is simple: wanderlust.
                            It reflects in our selection of exquisite
                            boutique hotels. We hand-select the hotels and activities
                            that we work with regularly. Our quality
                            is our priority.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;