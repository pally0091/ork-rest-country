import React from 'react';
import "./Country.css"
const Country = (props) => {
    const {area, region, name, flags, capital} =props.country;
    return (
        <div className='country-card'>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p>capital : {capital}</p>
        </div>
    );
};

export default Country;