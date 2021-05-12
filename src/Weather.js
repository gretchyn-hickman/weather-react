import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import Temperature from "./Temperature";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <p className="date" id="dayAndTime">
        <FormattedDate date={props.data.date} />
      </p>
      <h2 id="city">
        {props.data.city}, {props.data.country}
      </h2>
      <Icon icon={props.data.icon} size={85} />
      <p className="description" id="description">
        {props.data.description}
      </p>

      <div className="temperature">
        <p>
          <Temperature celsius={props.data.temperature} />
        </p>
      </div>

      <div className="extras">
        <ul>
          <li>
            Wind: <span id="wind"></span>
            {props.data.wind}km/h
          </li>
          <li>
            Humidity: <span id="humidity"></span>
            {props.data.humidity}%
          </li>
          <li>
            Chance of rain: <span id="precipitation">0</span>
            {props.data.rain}%
          </li>
        </ul>
      </div>
    </div>
  );
}
