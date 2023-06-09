import React from 'react';

const InfoCard = ({card}) => {
    const {name,description,icon,bgClass}=card;
    return (
        <div className={`card p-6 md:card-side shadow-xl text-white ${bgClass}`} data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <figure>
                <img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;