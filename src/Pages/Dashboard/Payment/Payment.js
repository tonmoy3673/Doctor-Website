import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';

const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise);
const Payment = () => {
    const booking=useLoaderData();
    
    const {treatment,slot,price,appointmentDate}=booking;

    return (
        <div className='py-10'>
            <h3 className='text-3xl text-primary font-semibold text-center py-5'>Payment for {treatment}</h3>
            <p className='text-center text-xl py-3'>Please pay <span className='text-red-600 font-bold'>{price}$</span> for your appointment on <span className='font-semibold'>{appointmentDate}</span> at <span className='font-semibold'>{slot}</span></p>
            <div className='lg:w-2/4 md:w-48 sm:w-36 py-10 mx-auto'>
            <Elements stripe={stripePromise}>
      <CheckoutFrom 
      booking={booking}/>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;