import React from "react";
import "./Footer";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer" id="footer">
      <small>
        <a
          id="github-ref"
          href="https://github.com/laura-g56/weather-react"
          target="_blank norefferer"
        >
          Open-source code
        </a>
        designed by Laura Gumienik.
      </small>
    </div>
  );
}
