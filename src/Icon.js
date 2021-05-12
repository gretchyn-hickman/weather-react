import React from "react";
import "./Icon.css";

export default function Icon(props) {
  let icon = "";
  if (props.icon === "03d" || props.icon === "03n") {
    icon = "images/cloudy.svg"; //scattered clouds day/night
  } else if (props.icon === "04d") {
    icon = "images/partly-cloudy.svg"; //broken clouds day
  } else if (props.icon === "04n") {
    icon = "images/night-partly-cloudy.svg"; //broken clouds night
  } else if (props.icon === "01d") {
    icon = "images/sunny.svg"; //clear day
  } else if (props.icon === "01n") {
    icon = "images/night-clear.svg"; //clear night
  } else if (props.icon === "02d") {
    icon = "images/partly-cloudy.svg"; //partly cloudy day
  } else if (props.icon === "02n") {
    icon = "images/night-partly-cloudy.svg"; //partly cloudy night
  } else if (props.icon === "09d") {
    icon = "images/sun-shower.svg"; //showers day
  } else if (props.icon === "09n") {
    icon = "images/night-rainy.svg"; //showers night
  } else if (props.icon === "10d") {
    icon = "images/heavy-rain.svg"; //mod-heavy rain day
  } else if (props.icon === "10n") {
    icon = "images/night-rainy.svg"; //rain night
  } else if (props.icon === "11d") {
    icon = "images/stormy.svg"; //thunderstorm day
  } else if (props.icon === "11n") {
    icon = "images/night-storm.svg"; //thunderstorm night
  } else if (props.icon === "13d") {
    icon = "images/snow.svg"; //snow day
  } else if (props.icon === "13n") {
    icon = "images/night-snow.svg"; //snow night
  } else if (props.icon === "50d") {
    icon = "images/haze.svg"; //mist day
  } else if (props.icon === "50n") {
    icon = "images/haze.svg"; //mist night
  }

  return <img src={icon} alt="weather-icon" />;
}
