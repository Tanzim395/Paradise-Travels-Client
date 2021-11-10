import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ExploreBanner.css';

const ExploreBanner = () => {
    return (
        <Container className="mb-4">
            <div className="row row-cols-1 row-cols-md-2 g-2">

                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Feel The Joy Of Nature Through <i><span className="text-success">Paradise</span></i></h4>
                        <p className="text-muted">
                            Treat yourself, your time, your journey, your enjoy, Our Pleasure to give you the best Travel Experience All Around the world
                        </p>
                        <NavLink to="service" className="btn btn-secondary px-5">Service</NavLink>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="http://farm2.staticflickr.com/1239/552169545_5ed613de36_b.jpg" alt="nature" />
                </div>
            </div>
        </Container>
    );
};

export default ExploreBanner;