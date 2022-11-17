import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
    const { name ,slots} = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const phone =form.phone.value;
        const name =form.name.value;
        const slot=form.slot.value;

        const booking={
            appointmentDate:date,
            treatment:name,

            email,
            phone,
            name,
            slot
            
    
        }
        setTreatment(null);
    }

    
    

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6 text-primary text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            
                            {
                                slots.map((slot,i)=><option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email address" className="input input-bordered w-full" />
                        <input name='phone'  type="number" placeholder="Phone number" className="input input-bordered w-full" />
                        <br />
                        <input type='submit' className='btn btn-primary w-full' value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;