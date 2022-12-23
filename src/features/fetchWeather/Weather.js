import React from 'react';

export const Weather = ({ weather }) => {
    return (
        <span>
            {!weather ? <span>Loading...</span> : <h3>{`${Math.round(weather.main.temp)}°F`}</h3>}
        </span>
    )
}