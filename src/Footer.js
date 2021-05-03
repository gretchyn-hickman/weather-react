import React from "react";
import "./Footer";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer" id="footer">
      <small>
        Coded by Laura Gumienik,{" "}
        <a
          id="github-ref"
          href="https://github.com/laura-g56/weather-react"
          target="_blank norefferer"
        >
           open-sourced on GitHub,
        </a>
        and{" "}
          <a
            id="github-ref"
            href="https://suspicious-meninsky-847725.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          hosted on Netlify.
          </a>
      </small>
    </div>
  );
}
