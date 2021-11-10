import React from 'react';
import Search from '../Search/Search';
import './ServiceBanner.css';

const ServiceBanner = props => {
    const { register, handleSubmit, onSubmit } = props;

    return (
        <div className="mb-4 text-center bg-light service-banner">
            <h4 className="display-6 cursive-text service-title">
                Special Deals and Last-Minute Offers
            </h4>
            <div>
                <div>
                    <small className="text-muted small-text">
                        Book a unique tour at a great price! Grab a last-minute offer and start
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                        packing for your memorable vacation.
                    </small>
                </div>
            </div>

            <Search
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
            </Search>
        </div>
    );
};

export default ServiceBanner;