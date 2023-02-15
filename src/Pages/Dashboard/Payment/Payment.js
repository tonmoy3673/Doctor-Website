import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking=useLoaderData();
    console.log(booking);
    const {treatment,slot,price,appointmentDate}=booking;

    return (
        <div className='py-10'>
            <h3 className='text-3xl text-primary font-semibold text-center py-5'>Payment for {treatment}</h3>
            <p className='text-center text-xl py-3'>Please pay <span className='text-red-600 font-bold'>{price}$</span> for your appointment on <span className='font-semibold'>{appointmentDate}</span> at <span className='font-semibold'>{slot}</span></p>
        </div>
    );
};

export default Payment;