import React from "react";
import "./Index.css";
import pictoPlus from "../../../assets/img/picto+.svg";

export default function Thumbnail(props) {
  // console.log ("props in thumbanail", props)
  
  return (
    <div className="mini-tab">
      <a href={props.url ? props.url : ""}>
        <div className="global-mini-tab">
          <img
            className="img-mini-tab"
            src={props.affiche}
            alt="visuel du spectacle"
            width="fit-content"
          />
          <div className="title-mini-tab">
            <p className="date-mini-tab">{props.date}</p>
            <p className="country-mini-tab">{props.country}</p>
          </div>
          <img
            className="pictoPlus"
            src={pictoPlus}
            alt="pictogramme"
            width="20"
          />
        </div>
        <div>
          <p className="name-mini-tab">{props.name}</p>
          <p className="team-mini-tab">{props.team}</p>
        </div>
      </a>
    </div>
  );
}
