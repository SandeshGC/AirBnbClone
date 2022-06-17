import React from "react";
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img
        className="card--cover-image"
        src={require(`../images/${props.coverImg}`)}
      />{" "}
      {/*cover image of each card*/}
      {badgeText && (
        <div className="card--badge" id="badge">
          {badgeText}
        </div>
      )}{" "}
      {/*badge on card for online or sold out*/}
      <div className="card--details">
        <img
          className="card--star-icon"
          src={require("../images/star.png")}
          alt="star icon"
        />{" "}
        {/*star icon of every card rating*/}
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
