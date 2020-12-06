import React from "react";
import { Link } from "gatsby";
import picto from "../../../assets/img/picto+.svg";
import "./DisplayTabMenu.css";

export default function DisplayTabMenu(props) {
  return (
    <div className="display-tab-sticker">
      <Link to={props.url} className="to-uppercase">
        <div className="red-wrapper"></div>
        <img
          src={process.env.GATSBY_API_URL + props.image}
          alt={props.title}
          width="100%"
          height="100%"
          className="grayscale img-homepage"
        />
        <div className="display-tab-title">
          <img
            className="display-tab-logo"
            src={picto}
            alt="pictogramme"
            width="20"
          />
          <span>{props.title}</span>
        </div>
      </Link>
    </div>
  );
}
