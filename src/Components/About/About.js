import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
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
                        <h4 className="display-6 cursive-text">Best Travel Agency Award 2020</h4>
                        <p className="text-muted small-text">
                            We Are really pleased to let you know that we got an award from Ministry of National Tourist Agency 2020. That means your realibility makes us stronger...
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://previews.123rf.com/images/lenm/lenm0803/lenm080300071/2680974-receiving-award.jpg" alt="nature" />
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">2021 Top Travel Agency Nominated</h4>
                        <p className="text-muted small-text">
                            We Are really pleased to let you know that we got an award from Ministry of National Tourist Agency 2021. That means your realibility makes us stronger...
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://content.theadventurepeople.com/wp-content/uploads/2021/09/Travolution-awards-shortlist-banner.jpg" alt="nature" />
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Best Agents</h4>
                        <p className="text-muted small-text">
                            We Are really pleased to let you know that we provide our best from expert agency and travel related executed high performance team always ready to provide you the best service possibe. That means your realibility makes us stronger...
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://info.inteletravel.com/hubfs/Blogs/Inteletravel-Blog-Travel-Agent-vs-Travel-Advisor.jpg" alt="nature" />
                </div>
            </div>
        </Container>
    );
};

export default About;