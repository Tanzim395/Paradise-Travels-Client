import React from 'react';
import './NotFound.css';
import notFoundGif from './notFound.gif';

const NotFound = () => {
    return (
        <div className="text-center notFound">
            <img className="img-fluid" src={notFoundGif} alt="not found" />
        </div>
    );
};

export default NotFound;