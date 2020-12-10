import React from "react";
import "./RedTitleCard.css";

function RedTitleCardOld({ title, displayed, booking}) {

  return displayed ? (
    <>
      <div className="red"></div>
      <div className="image-text">
        <p>{title}</p>
      </div>
    </>
  ) : (
    <></>
  );
}

export default RedTitleCardOld;