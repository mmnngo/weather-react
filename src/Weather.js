import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,

      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="card">
        <div className="Search">
          <form id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  autofocus="on"
                  autocomplete="off"
                  className="form-control"
                  placeholder="Enter city here"
                  id="enter-city-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Current"
                  className="form-control btn btn-outline-primary"
                  id="current-location"
                />
              </div>
            </div>
          </form>
        </div>
        <p className="current-date" id="date">
          Friday, June 24, 2022 18:16
        </p>
        <div className="row">
          <div className="col-8">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="col-4">
            <span className="city-temperature" id="city-temperature">
              {Math.round(weatherData.temperature)}°C
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <ul className="current-high-low">
              <li className="text-capitalize" id="weather-description">
                {weatherData.description}
              </li>
              <li id="current-high-low">
                {" "}
                {Math.round(weatherData.maxTemp)}°C /{" "}
                {Math.round(weatherData.minTemp)}°C{" "}
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/hr</li>
            </ul>
          </div>
          <div className="col-4">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              id="icon"
              className="icon"
            />
          </div>

          <hr />
          <div className="weather-forecast">Weather Forecast</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "65b5662e22ff1bb3952c072792011a99";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
