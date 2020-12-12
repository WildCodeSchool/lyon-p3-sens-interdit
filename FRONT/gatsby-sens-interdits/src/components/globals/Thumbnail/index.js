import React from "react";
import { Link } from "gatsby";
import { sluggify } from "./../../../utils/Sluggify";

import "./Index.css";
import pictoPlus from "../../../assets/img/picto+.svg";

export default function Thumbnail(props) {
  return (
    <div className="mini-tab">
      <Link to={props.url}>
        <div className="global-mini-tab">
          <img
            className="img-mini-tab"
            src={props.affiche}
            alt="visuel du spectacle"
            width="fit-content"
          />
          <div className="title-mini-tab">
            <p
              className={`date-mini-tab ${
                props.date === "inconnue" || props.date === undefined
                  ? "hidden"
                  : ""
              }`}
            >
              {props.date ? props.date : null}
            </p>
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
      </Link>
    </div>
  );
}
