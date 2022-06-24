import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1>Weather Search Engine</h1>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
