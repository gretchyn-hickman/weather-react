import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import Temperature from "./Temperature";
// import Rain from "./Rain";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <h2 className="City">
        {props.data.city}, {props.data.country}
      </h2>
      <Icon icon={props.data.icon} size={85} />
      <p className="description">{props.data.description}</p>

      <div className="temperature">
        <p>
          <Temperature
            celsius={props.data.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </p>
      </div>

      <div className="extras">
        <ul>
          <li>
            Wind: <span>{props.data.wind}km/h</span>
          </li>
          <li>
            Humidity: <span>{props.data.humidity}%</span>
          </li>
          <li>{/* <Rain /> */}</li>
        </ul>
      </div>
    </div>
  );
}
