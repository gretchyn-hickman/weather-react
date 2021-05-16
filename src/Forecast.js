import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function fetchForecast() {
    let apiKey = "c9372dd2ab0fc70c02af13cd16583303";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="row weather-forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <DailyForecast forecast={dailyForecast} unit={props.unit} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    fetchForecast();

    return null;
  }
}
