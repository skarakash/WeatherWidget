import React from 'react';

const WeatherWidget = ({city, temperature}) => {
    return (
        <div className="WeatherWidget">
            {
                city.length === 0 &&
                    <div>no data</div>
            }
            {
                city.length > 0 &&
                    <div>{city}  {temperature}<sup>°C</sup></div>
            }
        </div>
    )
}

export default WeatherWidget;