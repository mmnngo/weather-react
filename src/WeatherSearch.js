import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

export default function WeatherSearch(props) {
  const [weatherDescription, setWeatherDescription] = useState({
    ready: false,
  });

  function handleSubmit(response) {
    setWeatherDescription({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherDescription.ready) {
    return (
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
    );
  } else {
    const apiKey = "65b5662e22ff1bb3952c072792011a99";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);
    return <Grid color="#00BFFF" height={80} width={80} />;
  }
}
