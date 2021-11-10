import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import Tour from '../Tour/Tour';
import { useForm } from "react-hook-form";
import './Service.css';

const Service = () => {
    const [tours, setTours] = useState([]);
    const [searchTours, setSearchTours] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // For Search Tour 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setSearchTours([]);
        setIsLoading(true);

        const query = tours.filter(tour => {
            return tour.name.toLowerCase().includes(data.searchText.toLowerCase());
        });

        if (query.length > 0) {
            setNotFound(false);
            setSearchTours(query);
            setIsLoading(false);
        }

        else {
            setNotFound(true);
            setIsLoading(false);
        };
        reset();
    };

    useEffect(() => {
        fetch("http://localhost:5000/tours")
            .then(res => res.json())
            .then(data => {
                setTours(data.slice().reverse());
                setSearchTours(data.slice().reverse());
                setNotFound(false);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            <ServiceBanner
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
            </ServiceBanner>

            {/* Tours List */}
            <Container>
                {/* For Search Result Not Found */}
                {notFound ? <h4 className="display-6 text-center mt-3 cursive-text py-5">No Result Found</h4> : null}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {/* For Loading Screen */}
                    {isLoading && !notFound ? <Loading></Loading> : null}

                    {searchTours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)}
                </div>
            </Container>
        </div>
    );
};

export default Service;