import React from 'react';
import { NavLink } from 'react-router-dom';
import './OfferBanner.css';

const OfferBanner = () => {
    return (
        <div className="mb-4 text-center bg-light offer-banner">
            <h4 className="display-6 cursive-text offer-title">Get 20% Off Your First Trip</h4>
            <div>
                <div>
                    <small className="text-muted small-text">
                        Who doesn’t like a discount? Book with us your first trip today and receive an
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                        exclusive offer.
                    </small>
                </div>
            </div>
            <NavLink to="service" className="btn btn-danger mt-3 px-4">Service</NavLink>
        </div>
    );
};

export default OfferBanner;