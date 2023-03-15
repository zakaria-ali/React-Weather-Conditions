import React, { useContext } from 'react';
import GetIconByID from '../GetIconByID/GetIconByID';
import { DataContext } from '../Search/Search'

function NextHours() {
    const {nextDay } = useContext(DataContext);
    let time = 0
    let newtime
    return (
        <div className='NextHours-container'>
            {   
                nextDay.map((hur, i) => {
                    newtime=(time +3).toString().padStart(2, "0")
                    time=time+3
                    return (
                        <div className="hur" key={i}>
                            <small>{newtime}:00</small>
                            <GetIconByID id = {nextDay[i].weather[0].id}  className="icon"/>
                            <small>{(nextDay[i].main.temp).toFixed()}°C</small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NextHours