import React from "react";
import { Fade } from "react-reveal";

import "./home-style.css";

import portofolioImg from "../../assets/portfolio-website.svg";

export default function HomePage(props) {
  return (
    <div className="home-page">
      <Fade cascade>
        <div className="welcome-msg">
          <h1>Hi,</h1>
          <h1>Welcome</h1>
        </div>
      </Fade>
      <img
        className="portofolio-img"
        src={portofolioImg}
        alt="portfolio-website"
      />
    </div>
  );
}
