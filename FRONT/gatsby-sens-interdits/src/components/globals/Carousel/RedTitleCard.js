import React from "react";
import "./RedTitleCard.css";

function RedTitleCard({ title, displayed, booking, country }) {

  return displayed ? (
    <>
      <div className="red"></div>
      <div className="image-text">
        {{ country } ? <p className="bold-font to-uppercase country">{country}</p> : null}
        <p className="bold-font to-uppercase title">{title}</p>
        {{ booking } ? <a href={booking} title="booking" className="button to-uppercase" target="_blank" rel="noreferrer">Réserver</a> : null}
      </div>
    </>
  ) : (
      <></>
    );
}

export default RedTitleCard;
