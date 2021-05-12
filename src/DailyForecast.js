import React from "react";
import Icon from "./Icon";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="">
      <h6 className="days col-5 col-md-auto text-center">{day()}</h6>
      <Icon icon={props.data.weather[0].icon} size={38} />
      <div className="weather-forecast">
        <strong>
          <span className="DailyForecast-temp-max">{maxTemp()}</span>
        </strong>{" "}
        | <span className="DailyForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
