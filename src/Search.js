import React from "react";
import axios from "axios";
import { Grid } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

export default function Search() {
  let city = "New York";
  function handleResponse(response) {
    alert(`The weather in ${city} is ${response.data.main.temp}°C`);
  }
  let apiKey = "65b5662e22ff1bb3952c072792011a99";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <Grid color="#00BFFF" height={80} width={80} />;
}
