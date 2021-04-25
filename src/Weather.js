import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    dateTime: "Friday 23 Apr 2021 5:36 PM",
    city: "Melbourne, AU",
    image: "images/partly-cloudy.svg",
    description: "Cloudy",
    temperature: 24,
    humidity: 25,
    wind: 13,
    rain: 17
  };
  return (
    <div className="Weather">
      <p className="date" id="dayAndTime">
        {weatherData.dateTime}
      </p>
      <h2 id="city">{weatherData.city}</h2>
      <img id="icon" src={weatherData.image} alt="clouds" />
      <p className="description" id="description">
        {weatherData.description}
      </p>

      <div className="temperature">
        <p>
          <span id="temperature">{weatherData.temperature}</span>
          <span className="units">
            <a href="/" id="celsius-link">
              °C
            </a>{" "}
            |
            <a href="/" id="fahrenheit-link">
              °F
            </a>
          </span>
        </p>
      </div>

      <div className="extras">
        <ul>
          <li>
            Wind: <span id="wind"></span>
            {weatherData.wind}km/h
          </li>
          <li>
            Humidity: <span id="humidity"></span>
            {weatherData.humidity}%
          </li>
          <li>
            Chance of rain: <span id="precipitation"></span>
            {weatherData.rain}%
          </li>
        </ul>
      </div>
    </div>
  );
}
