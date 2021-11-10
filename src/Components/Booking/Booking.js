import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Booking = () => {
    // For User
    const { user } = useAuth();

    // For Loading
    const [isLoading, setIsLoading] = useState(false);

    // For Tour
    const { id } = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tours/${id}`)
            .then(res => res.json())
            .then(data => {
                setTour(data);
            });
    }, []);

    // For Date
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate());
    const date = dateObj.toISOString().substr(0, 10);

    // For Handle Form
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.tourName = tour.name;
        data.price = tour.price;
        data.image = tour.image;
        data.description = tour.description;
        data.duration = tour.duration;
        data.status = "Pending";
        setIsLoading(true);

        fetch("http://localhost:5000/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setIsLoading(false);
                    history.push("/myOrders");
                };
            });
    };

    return (
        <Container className="my-4 booking">
            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <div>
                        <div className="row g-4">
                            {/* Tour Details */}
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="card h-100">
                                    <img src={tour.image} className="card-img-top" alt={tour.name} />
                                    <div className="card-body">
                                        <h4 className="card-title cursive-text text-center">
                                            {tour.name}
                                        </h4>

                                        <p className="card-text more-small-text text-muted text-justify">
                                            {tour.description}
                                        </p>

                                        <div className="row mb-2">
                                            <div className="col-6">
                                                <div className="more-small-text text-muted">
                                                    <span>Price: </span>
                                                    <span className="fw-bold">৳{tour.price}</span>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="text-end me-1">
                                                    <div className="more-small-text text-muted">
                                                        <span>Duration: </span>
                                                        <span className="fw-bold">{tour.duration} Days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <FontAwesomeIcon icon={faStar} className="more-small-text pink-text me-1" />
                                                <FontAwesomeIcon icon={faStar} className="more-small-text pink-text me-1" />
                                                <FontAwesomeIcon icon={faStar} className="more-small-text pink-text me-1" />
                                                <FontAwesomeIcon icon={faStar} className="more-small-text pink-text me-1" />
                                                <FontAwesomeIcon icon={faStar} className="more-small-text pink-text me-1" />
                                            </div>

                                            <div className="col-6">
                                                <div className="text-end">
                                                    <FontAwesomeIcon icon={faFacebookF} className="pointer more-small-text text-muted me-1" />

                                                    <FontAwesomeIcon icon={faInstagram} className="pointer more-small-text text-muted me-1" />

                                                    <FontAwesomeIcon icon={faTwitter} className="pointer more-small-text text-muted me-1" />

                                                    <FontAwesomeIcon icon={faWhatsapp} className="pointer more-small-text text-muted me-1" />

                                                    <FontAwesomeIcon icon={faPinterest} className="pointer more-small-text text-muted me-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact GIF */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="card h-100 border-0 d-flex align-items-center justify-content-center">
                                    <img className="img-fluid" src="https://i.ibb.co/1bPs03Y/mail-success.gif" alt="mail" />
                                </div>
                            </div>

                            {/* Order Form */}
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                            Order Form
                                        </h6>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Full Name"
                                                value={user.displayName}
                                                readOnly
                                                {...register("name", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="email"
                                                placeholder="Email"
                                                value={user.email}
                                                readOnly
                                                {...register("email", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Phone Number"
                                                {...register("phone", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="date"
                                                defaultValue={date}
                                                {...register("date", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Tour Name"
                                                value={tour.name}
                                                readOnly
                                                {...register("tourName")}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="number"
                                                placeholder="Tour Name"
                                                value={tour.price}
                                                readOnly
                                                {...register("price")}
                                            />
                                        </div>

                                        <input className="btn btn-danger w-100 py-2 fw-normal" type="submit" value="Confirm Order" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default Booking;