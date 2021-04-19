import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search-Form">
      <form>
        <div className="search-city">
          <div className="button-in">
            <input
              type="text"
              className="city-search-control"
              placeholder="Search city..."
              autoComplete="off"
              id="city-input"
            />
            <button id="search-icon" className="icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
