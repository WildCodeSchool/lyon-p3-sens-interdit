import React from "react";
import "./RedTitleCard.css";

function RedTitleCardOld({ title, displayed, booking}) {

  return displayed ? (
    <>
      <div className="red"></div>
      <div className="image-text image-text-old">
    
        <p >{title}</p>
      </div>
      
    </>
  ) : (
    <></>
  );
}

export default RedTitleCardOld;