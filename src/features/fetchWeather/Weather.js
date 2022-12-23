import React from 'react';

export const Weather = ({ weather }) => {
    const { temp } = weather.main;
    return (
        <span>
            {!weather ? <span>Loading...</span> : <span>{`${Math.round(temp)}°F`}</span>}
        </span>
    )
}