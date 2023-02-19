import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from './Contact/Contact';
import SideBanner from './SideBanner/SideBanner';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <SideBanner></SideBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact/>
        </div>
    );
};

export default Home;