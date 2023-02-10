import React from 'react';
import doctor from '../../../images/doctor.png';
import appointment from '../../../images/appointment.png';
import PrimaryButton from '../../../MyComponent/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {

    return (
        <section className='mt-32' style={{
            background:`url(${appointment})`
        }}>

            
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row -mb-4">
                    <img src={doctor} alt='doctor' className="lg:w-1/2 rounded-lg shadow-2xl -mt-32 hidden md:block lg:block" />
                    <div className='text-white'>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-bold">Make an Appointment Today!</h1>
                        <p className="py-6">Going to the dentist can be a nerve-wracking experience for many people, but it's important to keep up with regular dental check-ups to maintain good oral health.
                        The exact procedure at a dentist appointment will depend on the type of appointment you have and the specific needs of your dental health.
                        </p>
                        
                        <Link to='/appointment'><PrimaryButton>Appointment</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;