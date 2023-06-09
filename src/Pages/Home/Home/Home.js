import React from 'react';
import Chat from '../../../Chat/Chat';

import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from './Contact/Contact';
import SideBanner from './SideBanner/SideBanner';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    
    useTitle('Home');
    
    return (
        <div className='mx-auto px-10'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <SideBanner></SideBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact/>
            <Chat/>
        </div>
    );
};

export default Home;