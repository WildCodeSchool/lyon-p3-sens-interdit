import React from "react";
import "./RedTitleCard.css";

function RedTitleCard(props) {
  return (
    <>
      <div className="red"></div>
      <div className="image-text">
        <p>{props.title}</p>
        <button>Réserver</button>
      </div>
    </>
  );
}

export default RedTitleCard;
