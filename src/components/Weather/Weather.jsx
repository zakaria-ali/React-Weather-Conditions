import React, { useContext } from 'react'
import GetIconByID from '../GetIconByID/GetIconByID'
import { DataContext } from '../Search/Search'

function Weather() {
    const { currentDay, id } = useContext(DataContext)

    return (
        <div className = 'weather-container' >
            <GetIconByID id = { id } />
            <h4>{currentDay.weather[0].description} </h4>
            <p className='temp'>Temperature<small>{Math.floor(currentDay.main.temp_min)}°C to {Math.floor(currentDay.main.temp_max)}°C</small></p>
            <p className='hum'>Humidity<small>{currentDay.main.humidity}%</small>Pressure <small>{currentDay.main.pressure}</small></p>
        </div>
    )
}

export default Weather