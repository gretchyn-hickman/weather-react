import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row weather-forecast" id="forecast">
      <div className="days col-5 col-md-auto text-center">
        <h7>Sat</h7>
        <img src="images/stormy.svg" alt="stormy" />
        <div className="weather-forecast-temperature">
          <strong>17°</strong> | 10°
        </div>
      </div>

      <div className="days col-5 col-md-auto text-center">
        <h7>Sun</h7>
        <img src="images/partly-cloudy.svg" alt="cloudy" />
        <div className="weather-forecast-temperature">
          <strong>23°</strong> | 14°
        </div>
      </div>

      <div className="days col-5 col-md-auto text-center">
        <h7>Mon</h7>
        <img src="images/haze.svg" alt="hazy" />
        <div className="weather-forecast-temperature">
          <strong>29°</strong> | 15°
        </div>
      </div>

      <div className="days col-5 col-md-auto text-center">
        <h7>Tue</h7>
        <img src="images/heavy-rain.svg" alt="rainy" />
        <div className="weather-forecast-temperature">
          <strong>19°</strong> | 12°
        </div>
      </div>

      <div className="days col-5 col-md-auto text-center">
        <h7>Wed</h7>
        <img src="images/sunny.svg" alt="sunny" />
        <div className="weather-forecast-temperature">
          <strong>18°</strong> | 13°
        </div>
      </div>
    </div>
  );
}
