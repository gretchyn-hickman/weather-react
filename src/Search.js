import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";

import "./Search.css";
import Loader from "react-loader-spinner";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

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
    // rainData({
    //   rain: Math.round(response.data.daily[0].pop * 100)
    // });
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

  // function rainData() {
  //   let apiKey = "c9372dd2ab0fc70c02af13cd16583303";
  //   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  //   axios.get(apiUrl).then(handleResponse);
  // }

  function getCurrentLocation(position) {
    const apiKey = "c9372dd2ab0fc70c02af13cd16583303";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function fetchLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
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
              <button
                id="location-icon"
                className="icon"
                onClick={fetchLocation}
              >
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
        <Weather data={weatherData} unit={unit} setUnit={setUnit} />
        <Forecast coordinates={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <Loader
          type="ThreeDots"
          color="rgb(113, 143, 182)"
          height={85}
          width={85}
        />
      </div>
    );
  }
}
