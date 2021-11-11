import React from 'react';
import { NavLink } from 'react-router-dom';
import './OfferBanner.css';

const OfferBanner = () => {
    return (
        <section className="match-schedule container">
            <h2 className="text-center text-primary">Upcoming tour Schedule</h2>
            <table>
                <thead>
                    <th>Date</th>
                    <th>From Country</th>
                    <th>To Country</th>
                    <th>Departure Time</th>
                </thead>

                <tbody>
                    <tr>
                        <td>19-11-2021</td>
                        <td>Bangladesh</td>
                        <td>Singapore</td>
                        <td>10:00 PM</td>
                    </tr>

                    <tr>
                        <td>25-11-2021</td>
                        <td>Bangladesh</td>
                        <td>France</td>
                        <td>08:00 PM</td>
                    </tr>

                    <tr>
                        <td>01-12-2021</td>
                        <td>Bangladesh</td>
                        <td>UAE</td>
                        <td>11:00 AM</td>
                    </tr>

                    <tr>
                        <td>07-12-2021</td>
                        <td>Bangladesh</td>
                        <td>Sri-Lanka</td>
                        <td>10:00 PM</td>
                    </tr>

                    <tr>
                        <td>05-05-2021</td>
                        <td>Bangladesh</td>
                        <td>London</td>
                        <td>06:00 PM</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default OfferBanner;