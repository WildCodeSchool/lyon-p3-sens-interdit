import React from "react";
import "./RedTitleCard.css";

function RedTitleCard({ title, displayed, booking}) {

  return displayed ? (
    <>
      <div className="red"></div>
      <div className="image-text">
        <p>{title}</p>
        <a href={booking} title="booking" className="highlight to-uppercase" target="_blank" rel="noreferrer">Réserver</a>
      </div>
    </>
  ) : (
    <></>
  );
}

export default RedTitleCard;
