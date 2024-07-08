import React, { useState } from 'react'
import './WeatherApp.css'

// Importing images
import search_icon from '../images/search.png';

import clear_icon from '../images/clear.png';
import cloud_icon from '../images/clouds.png';
import drizzle_icon from '../images/drizzle.png';
import rain_icon from '../images/rain.png';
import snow_icon from '../images/snow.png';

import wind_icon from '../images/wind.png';
import humidity_icon from '../images/humidity.png';


const WeatherApp = () => {

  // API KEY //
  let api_key = "6557810176c36fac5f0db536711a6c52";

  const [wicon,setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="")
    {
      return 0;
    }

    // THUNDER CLIENT USE //
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    // FETCH API //
    let response = await fetch(url)
    let data =  await response.json();

    //  VALUE OF PERCENT - RATE - TEMP - LOCATION // 
    // BY USE OF = DOCUMENT.GETELEMENTsBYCLASSNAME //
    const humidity = document.getElementsByClassName("humidty-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp)+" ⁰c";
    location[0].innerHTML = data.name;

    // DATA TO CHANGE THE WEATHER UPDATA FOR ALL //
    if(data.weather[0].icon==="01d"|| data.weather[0].icon=="01n")
    {
      setWicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d"|| data.weather[0].icon=="02n")
    {
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d"|| data.weather[0].icon=="03n")
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d"|| data.weather[0].icon=="04n")
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d"|| data.weather[0].icon=="09n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d"|| data.weather[0].icon=="10n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d"|| data.weather[0].icon=="13n")
    {
      setWicon(snow_icon);
    }
    else
    {
      setWicon(clear_icon);
    }
  }

  return (
    <div className='container'>
      {/* ----------- USE SEARCH BAR ---------- */}
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
      {/* ------- USE SEARCH ICON ------ */}
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
    <div className="weather-image">
      <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">33⁰c</div>
      <div className="weather-location">Pune</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidty-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>





    
  )
}

export default WeatherApp

