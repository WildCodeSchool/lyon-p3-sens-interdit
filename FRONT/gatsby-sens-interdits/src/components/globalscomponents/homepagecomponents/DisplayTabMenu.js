import React from "react";
import picto from "../../../img/picto+.svg";

export default function DisplayTabMenu(props) {
  return (
    <div className="display-tab-sticker">
      <img src={props.image} alt="sens" width="100%" height="100%" />
      <div className="display-tab-title">
        <a title={props.title} href="#">
          <img className="display-tab-logo" src={picto} alt="plus" width="20" />
        </a>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
