import React from "react";
import Icon from "./Icon";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function celsiusMaxTemp() {
    let celsiusMaxTemp = Math.round(props.forecast.temp.max);
    return celsiusMaxTemp;
  }

  function celsiusMinTemp() {
    let celsiusMinTemp = Math.round(props.forecast.temp.min);
    return celsiusMinTemp;
  }

  function fahrenheitMaxTemp() {
    let fahrenheitMaxTemp = Math.round((props.forecast.temp.max * 9) / 5 + 32);
    return fahrenheitMaxTemp;
  }

  function fahrenheitMinTemp() {
    let fahrenheitMinTemp = Math.round((props.forecast.temp.min * 9) / 5 + 32);
    return fahrenheitMinTemp;
  }

  if (props.unit === "celsius") {
    return (
      <div className="DailyForecast">
        <h6 className="days col-5 col-md-auto text-center">{day()}</h6>
        <Icon icon={props.forecast.weather[0].icon} size={38} />
        <div className="weather-forecast">
          <strong>
            <span className="DailyForecast-temp-max">{celsiusMaxTemp()}°</span>
          </strong>{" "}
          | <span className="DailyForecast-temp-min">{celsiusMinTemp()}°</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="DailyForecast">
        <h6 className="days col-5 col-md-auto text-center">{day()}</h6>
        <Icon icon={props.forecast.weather[0].icon} size={38} />
        <div className="weather-forecast">
          <strong>
            <span className="DailyForecast-temp-max">
              {fahrenheitMaxTemp()}
            </span>
            °
          </strong>{" "}
          |{" "}
          <span className="DailyForecast-temp-min">{fahrenheitMinTemp()}°</span>
        </div>
      </div>
    );
  }
}
