import React from 'react';
import { format } from 'date-fns';
const AvailableAppointment = ({selectedDate}) => {
    return (
        <div className='py-10'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;