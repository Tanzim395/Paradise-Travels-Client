import React from 'react';
import './Tour.css';
import { NavLink } from 'react-router-dom';

const Tour = props => {
    const { _id, name, price, image, description, duration } = props.tour;

    return (
        <div className="col tour">
            <NavLink to={`/booking/${_id}`} className="text-decoration-none text-black">
                <div className="card bg-light h-100">
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h4 className="card-title text-center border border-rounded">
                            {name}
                        </h4>

                        <p className="card-text more-small-text text-muted text-justify">
                            {description.slice(0, 200)}
                        </p>

                        <div className="row mb-2">
                            <div className="col-6">
                                <div className="more-small-text text-muted">
                                    <span>Price: </span>
                                    <span className="fw-bold">৳{price}</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="text-end me-1">
                                    <div className="more-small-text text-muted">
                                        <span>Duration: </span>
                                        <span className="fw-bold">{duration} Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="card-footer border-0 bg-white p-0">
                        <NavLink to={`/booking/${_id}`} className="btn btn-primary px-4 w-100 rounded-0 order-btn">
                            Book Now!
                        </NavLink>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Tour;