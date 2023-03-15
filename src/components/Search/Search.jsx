import React, { createContext, useState } from 'react';
import NextHours from '../NextHours/NextHours';
import Weather from '../Weather/Weather';
import axios from 'axios';

export const DataContext = createContext(
    {
        currentDay: {},
        nextDay: {},
        id:0
    }
);

function Search() {
    const [isClicked,setIsClicked] = useState(false)
    const [search,setSearch] = useState("")
    const [id,setId] = useState(0)
    const [currentDay,setCurrentDay] = useState({})
    const [nextDay,setNextDay] = useState({})

    const HandelClick = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=8&units=metric&appid=5b40474276671a9c611a3e3af8b2bba2`)
        .then(response => {
            setCurrentDay(response.data.list[0])
            setNextDay(response.data.list.slice(1,8))
            setId(response.data.list[0].weather[0].id)
            setIsClicked(true)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
            <div className="all-omponents-container">
                <form className = "search-form" onSubmit={HandelClick}>
                    <input type="text" 
                    value={search} 
                    onChange={e=>setSearch(e.target.value)}
                    placeholder="Type in a city name"
                    />
                    <button type="submit">find weather</button>
                </form>
                {isClicked && 
                    <DataContext.Provider value={{
                        currentDay:currentDay,
                        nextDay:nextDay,
                        id:id}}>
                        <Weather />
                        <NextHours />
                    </DataContext.Provider>
                }
            </div>
    )
}

export default Search