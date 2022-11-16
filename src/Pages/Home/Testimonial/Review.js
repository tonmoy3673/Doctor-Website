import React from 'react';

const Review = ({ review }) => {
    const { name, location, rev, img } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">

                <p className='mb-2'>{rev}</p>
                <div className="flex items-align">
                    <div className="mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img}  alt='img'/>
                        </div>

                    </div>
                    <div className=''>
                        <h5 className='font-bold'>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;