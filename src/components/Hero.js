import React from "react";
import GridImage from "../images/photo-grid.png";
function Hero() {
  return (
    <section className="hero">
      <img src={GridImage} className="hero--image-grid" />
      <div className="hero--text">
        <h1 className="hero--text-heading">Online Experiences</h1>
        <p className="hero--text-content">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
export default Hero;
