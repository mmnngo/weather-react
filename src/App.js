import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
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
              <h1>New York</h1>
            </div>
            <div className="col-4">
              <span className="city-temperature" id="city-temperature">
                25°C
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <ul className="current-high-low">
                <li id="weather-description">Rainy</li>
                <li id="current-high-low"> 18°C / 6°C </li>
                <li>Humidity: 30%</li>
                <li>Wind: 8 km/hr</li>
              </ul>
            </div>
            <div className="col-4">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="clear"
                id="icon"
                className="icon"
              />
            </div>

            <hr />
            <div className="weather-forecast">Weather Forecast</div>
          </div>
        </div>
        <p className="contact-me">
          This page was built by May Ngo and is open-sourced on{" "}
          <a
            href="https://github.com/mmnngo/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://chic-babka-35d9a7.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
