import React from 'react';
import doctor from '../../../images/doctor.png';
import appointment from '../../../images/appointment.png';
import PrimaryButton from '../../../MyComponent/PrimaryButton';

const MakeAppointment = () => {

    return (
        <section className='mt-32' style={{
            background:`url(${appointment})`
        }}>

            
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='doctor' className="lg:w-1/2 rounded-lg shadow-2xl -mt-32 hidden md:block lg:block" />
                    <div className='text-white'>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-bold">Make an Appointment Today!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;