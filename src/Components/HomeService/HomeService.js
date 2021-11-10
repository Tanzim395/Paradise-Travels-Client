import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Tour from '../Tour/Tour';
import './HomeService.css';

const HomeService = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/tours")
            .then(res => res.json())
            .then(data => {
                const reverseData = data.slice().reverse();
                setTours(reverseData.slice(0, 6));
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            {/* Service Banner */}
            <div className="service-banner text-center">
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
            </div>

            {/* Tours List */}
            <Container>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {/* For Loading Screen */}
                    {isLoading ? <Loading></Loading> : null}

                    {tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)}
                </div>
            </Container>
        </div>
    );
};

export default HomeService;