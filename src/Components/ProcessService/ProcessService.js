import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faSuitcaseRolling, faPlane, faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import './ProcessService.css';

const ProcessService = () => {
    return (
        <div className="mb-4 offer-banner">
            <h4 className="display-6 cursive-text offer-title text-center mb-4">Our Service Process</h4>
            <div className="container">
                <Row xs={1} md={2} lg={4} className="g-2">
                    <Col>
                        <Card className="border-0">
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faBook} className="pink-text icon" />
                                <Card.Title className="fs-6 cursive-text mt-3">Book Your Order</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faSuitcaseRolling} className="pink-text icon" />
                                <Card.Title className="fs-6 cursive-text mt-3">Pack Your Things</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faPlane} className="pink-text icon" />
                                <Card.Title className="fs-6 cursive-text mt-3">Ready For Travel</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faSmileBeam} className="pink-text icon" />
                                <Card.Title className="fs-6 cursive-text mt-3">Enjoy Vacation</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ProcessService;