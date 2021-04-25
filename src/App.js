import React from "react";

import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card" id="search">
          <Search />
          <div className="container search-city">
            <Weather />
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
