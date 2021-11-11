import React from 'react';
import Search from '../Search/Search';
import './ServiceBanner.css';

const ServiceBanner = props => {
    const { register, handleSubmit, onSubmit } = props;

    return (
        <div className="mb-4 text-center bg-light service-banner">
            <h4 className="display-6 cursive-text service-title">
                We Are Offering
            </h4>
            <div>
                <div>
                    <small className="text-black small-text">
                        Get the Ultimate hot Deals With Paradise Travels. Book your first order and get a flat 15% Discount!!! Go Hurry!
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