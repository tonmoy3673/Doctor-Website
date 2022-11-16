import React from 'react';


const Options = ({ options,setTreatment }) => {
    const { name, slots } = options;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-lg text-primary font-bold text-center">{name}</h2>
                <p >{slots.length>0 ? slots[0]:'Please Try Another Day'}</p>
                <p className='font-semibold'>{slots.length} {slots.length >1 ? 'spaces':'space'} Available</p>
                <div className="card-actions mx-auto">
                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=>setTreatment(options)}>Book Appointment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default Options;