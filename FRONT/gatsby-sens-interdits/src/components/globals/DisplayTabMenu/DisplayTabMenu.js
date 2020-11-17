import React from "react";
import picto from "../../../assets/img/picto+.svg";
import "./DisplayTabMenu.css";

export default function DisplayTabMenu(props) {
  return (
    <div className="display-tab-sticker">
      <img
        src={"http://localhost:1337" + props.image[0].url}
        alt={props.title}
        width="100%"
        height="100%"
      />
      <div className="display-tab-title">
        <img
          className="display-tab-logo"
          src={picto}
          alt="pictogramme"
          width="20"
        />
        <p>{props.title}</p>
      </div>
    </div>
  );
}
