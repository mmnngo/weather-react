import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import FormattedDate from "./FormattedDate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Search />
          <FormattedDate />
        </div>
      </div>
    </div>
  );
}

export default App;
