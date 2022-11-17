import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Options from './Options';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [appointment,setAppointment]=useState([]);
    const [treatment,setTreatment]=useState(null);

    useEffect(()=>{
        fetch('appointment.json')
        .then(res=>res.json())
        .then(data=>setAppointment(data))
    },[])
    return (
        <div className='py-10'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6'>
            {
               appointment.map(options=><Options
                key={options._id}
                options={options}
                setTreatment={setTreatment}
               ></Options>) 
            }
            </div>
            {
                treatment &&
                <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;