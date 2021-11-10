import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel fade className="mb-4">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.andbeyond.com/wp-content/uploads/sites/5/Amazon-Rain-Forest.jpg"
                    alt="Slide"
                />
                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">We Are Paradise Travellers</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-success mt-3 px-4 hide">Book!!!</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.gettyimages.com/vectors/time-to-travel-banner-vector-id901788120"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">We Are Paradise Travellers</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-success mt-3 px-4 hide">Book!!!</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/6Dx2Z8x/Travel-Around-the-World-Time-to-Travel-Banner-with-airplane-and-hand-draw-doodles-on-the-background.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">We Are Paradise Travellers</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-success mt-3 px-4 hide">Book!!!</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/hf0yJxr/5941035.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">We Are Paradise Travellers</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-success mt-3 px-4 hide">Book!!!</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/jvG2KTB/drawing-dream-travel-aroun-world-23417224.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">We Are Paradise Travellers</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-success mt-3 px-4 hide">Book!!!</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;