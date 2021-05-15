import React from "react";

export default function Temperature(props) {
  function toFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div className="Temperature" id="temperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={toFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="Temperature" id="temperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={toCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
