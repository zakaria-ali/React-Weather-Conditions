import React from 'react';

function GetIconByID(props) {
    const { id } = props;

    let iconName;
    if (id < 300) {
        iconName = "storm.svg"
    } else if (id >= 300 && id <= 499) {
        iconName = "drizzle.svg"
    } else if (id >= 500 && id <= 599) {
        iconName = "rain.svg"
    } else if (id >= 600 && id <= 699) {
        iconName = "snow.svg"
    } else if (id >= 700 && id <= 799) {
        iconName = "fog.svg"
    } else if (id === 800) {
        iconName = "clear.svg"
    } else if (id === 801) {
        iconName = "partlycloudy.svg"
    } else if (id > 801 && id <= 805) {
        iconName = "mostlycloudy.svg"
    }else {
        iconName = "unknown.svg"
    }

    const icon = require(`../../assets/weather-icons/${iconName}`)

    return <img src={icon} alt="weather icon" />
}

export default GetIconByID;
