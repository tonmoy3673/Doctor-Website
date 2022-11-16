
import img from '../../../images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = ({setSelectedDate,selectedDate}) => {
    
    return (
        <header className='mt-10'>
             <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img}  className="lg:w-1/2" alt='chair'/>
                <div className='mr-16'>
                <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                
                />  
                </div>
            </div>
        </div>
        
        </header>
    );
};

export default AppointmentBanner;