import React from 'react';
import quote from '../../../icons/quote.svg';
import people1 from '../../../images/people1.png';
import people2 from '../../../images/people2.png';
import people3 from '../../../images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews=[
        {
            _id:1,
            name:'Harry Kane',
            location:'England',
            rev:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            img:people1
        },
        {
            _id:2,
            name:'Fatima',
            location:'Brazil',
            rev:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            img:people2 
        },
        {
            _id:3,
            name:'Tina',
            location:'USA',
            rev:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            img:people3 
        }
    ]

    return (
        <section className='py-16 mt-6'>
            <div className='flex justify-between'>
                <div className='text-start'>
                    <h5 className='text-lg text-primary font-bold uppercase'>Testimonial</h5>
                    <h2 className='text-2xl font-bold'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} className='sm:w-24 lg:w-48' alt='quote'/>
                </figure>
            </div>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reviews.map(review=><Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;