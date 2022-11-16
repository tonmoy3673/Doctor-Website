import React from 'react';
import clock from '../../../icons/clock.svg';
import marker from '../../../icons/marker.svg';
import phone from '../../../icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData=[
        {
            id:1,
            name:'Opening Hours',
            description:'Open 9.00 am to 5.00 pm everyday',
            icon:clock,
            bgClass:'bg-primary'
        },
        {
            id:2,
            name:'Our Location',
            description:'Open 9.00 am to 5.00 pm everyday',
            icon:marker,
            bgClass:'bg-secondary'
        },
        {
            id:3,
            name:'Contact',
            description:'Open 9.00 am to 5.00 pm everyday',
            icon:phone,
            bgClass:'bg-primary'
        }

    ]
    return (
        <div className='grid gap-6 mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                cardData.map(card=><InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;