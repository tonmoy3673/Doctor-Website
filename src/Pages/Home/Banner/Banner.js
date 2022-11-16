import React from 'react';
import img from '../../../images/chair.png';

import './Banner.css';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img}  className="w-1/2 sm:w-full" alt='banner'/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">We have modern well equipped Operation unit. We use modern technology including  Autoclave Machine, UV Cabinet,  Endodontic Electric Motor, Apex Locator, Intraoral camera  to offer best oral treatment.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;