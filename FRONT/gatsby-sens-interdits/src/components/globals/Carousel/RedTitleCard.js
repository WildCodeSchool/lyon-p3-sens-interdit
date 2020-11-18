import React from "react";
import "./RedTitleCard.css";

function RedTitleCard({ title, displayed }) {
  return displayed ? (
    <>
      <div className="red"></div>
      <div className="image-text">
        <p>{title}</p>
        <button>Réserver</button>
      </div>
    </>
  ) : (
    <></>
  );
}

export default RedTitleCard;
