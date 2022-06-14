import React from "react";
export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card--cover-image"
        src={require(`../images/${props.coverImg}`)}
      />
      <div className="card--details">
        <img className="card--star-icon" src={require("../images/star.png")} />
        {props.stats.rating}
        <span className="grey-text">
           ({props.stats.reviewCount}) • {props.location}
        </span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="card--price">From ${props.price}</span> / person
      </p>
    </div>
  );
}
