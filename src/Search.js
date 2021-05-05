import React, { useState } from "react";
import Weather from "./Weather";
// import Forecast from "./Forecast";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c9372dd2ab0fc70c02af13cd16583303";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search-Form">
        <form onSubmit={handleSubmit}>
          <div className="search-city">
            <div className="button-in">
              <input
                type="text"
                className="city-search-control"
                placeholder="Search city..."
                autoComplete="off"
                id="city-input"
                onChange={handleCityChange}
              />
              <button id="search-icon" className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
        {/* <Forecast /> */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
