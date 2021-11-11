import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Team.css';

const Team = () => {
    return (
        <Container className="my-4">
            <div className="mb-4 text-center bg-light service-banner">
                <h4 className="display-6 cursive-text service-title">
                    Your Travel Advisor
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            Paradise Travels and Tours, Inc. was started in 2006 by Arnette Cowan.
                            Ms. Cowan received her training through the Travel Agent Training Center, Inc.
                            She received training as an Alaska Destination Specialist and in planning cruises.
                            She plans travel/tours for large or small groups and individuals.
                        </small>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">TSA Regulations</h4>
                        <p className="text-muted small-text">
                            TSA Regulation as per as best quality ensurity...
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://www.tsa.gov/sites/default/files/security-screening.jpg" alt="nature" />
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Need <span className="text-danger">Passport?</span></h4>
                        <p className="text-muted small-text">
                            Our expert team members are always ready to help you to get the passport without any hesitation.So why are you waiting for?
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://afar-production.imgix.net/uploads/images/afar_post_headers/images/wsGsA768bP/original_shutterstock_1110443648.jpg" alt="nature" />
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Foreign Currency</h4>
                        <p className="text-muted small-text">
                            At your travel agency you know well your Customers' needs. Now, when providing them their long-desired trips, you can offer them the currency they need with
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/04/06/968274-currency.jpg" alt="nature" />
                </div>
            </div>
        </Container>
    );
};

export default Team;