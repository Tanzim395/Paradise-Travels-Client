import React, { useState } from 'react';
import ExploreBanner from '../ExploreBanner/ExploreBanner';
import OfferBanner from '../OfferBanner/OfferBanner';
import Slider from '../Slider/Slider';
import HomeService from '../HomeService/HomeService';
import Loading from '../Loading/Loading';
import ProcessService from '../ProcessService/ProcessService';

const Home = () => {
    // For Loading Spinner
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 1500);

    return (
        <div>
            {
                !isLoading
                    ?
                    <>
                        <Slider></Slider>
                        <HomeService></HomeService>
                        <ExploreBanner></ExploreBanner>
                        <ProcessService></ProcessService>
                        <OfferBanner></OfferBanner>
                    </>
                    :
                    <Loading></Loading>
            }
        </div>

    );
};

export default Home;