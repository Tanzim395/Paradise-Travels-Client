import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="py-5 mx-auto">
            <div className="atom-spinner mx-auto">
                <div className="spinner-inner">
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-circle">
                        &#9679;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;