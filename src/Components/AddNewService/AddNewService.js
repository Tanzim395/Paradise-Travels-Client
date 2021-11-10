import React, { useState } from 'react';
import './AddNewService.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';

const AddNewService = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false)

    // For Handle Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setIsLoading(true);

        fetch("http://localhost:5000/tours", {
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
                    reset();
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 3000);
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
                            {/* Add Service Form */}
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                            Add Service
                                        </h6>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Tour Name"
                                                {...register("name", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="number"
                                                placeholder="Price"
                                                {...register("price", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Image URL"
                                                {...register("image", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Description"
                                                {...register("description", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="number"
                                                placeholder="Duration"
                                                {...register("duration", { required: true })}
                                            />
                                        </div>

                                        <input className="btn btn-danger w-100 py-2 fw-normal" type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>

                            {/* Service GIF */}
                            <div className="col col-12 col-sm-12 col-md-6">
                                {
                                    showAlert
                                        ?
                                        <div className="alert alert-success">
                                            Service added successfully
                                        </div>

                                        :

                                        <div className="card h-100 border-0 d-flex align-items-center justify-content-center">
                                            {/* <img className="img-fluid" src={workingManGif} alt="working man" /> */}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default AddNewService;