import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import SideBanner from './SideBanner/SideBanner';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <SideBanner></SideBanner>
        </div>
    );
};

export default Home;