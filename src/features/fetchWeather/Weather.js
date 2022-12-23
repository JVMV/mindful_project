import React from 'react';

export const Weather = ({ weather }) => {
    return (
        <span>
            {!weather ? <span>Loading...</span> : <span>{`${Math.round(weather.main.temp)}°F`}</span>}
        </span>
    )
}