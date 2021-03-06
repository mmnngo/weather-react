import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,

      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "65b5662e22ff1bb3952c072792011a99";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="card">
        <div className="Weather">
          <form onSubmit={handleSubmit} id="search-form">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  autoFocus="on"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Enter city here"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
