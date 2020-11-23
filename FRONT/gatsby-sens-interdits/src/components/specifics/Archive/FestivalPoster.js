import React from "react";
import picto from "../../../assets/img/picto+.svg";

function FestivalPoster(props) {
  return (
    <div className="festival-poster-wrapper">
      <img className="festival-poster" src={props.poster} alt={props.title} />
      <div className="festival-title-flex">
        <img className="picto-plus" src={picto} alt={props.title} />
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default FestivalPoster;
