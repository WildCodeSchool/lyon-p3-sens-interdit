import React from "react";
import TabSystemV from "../../globals/TabSystems/TabSystemV.js";
import "./index.css";
import "../../../assets/styles/global.css";

export default function GeneriquePage(props) {
  return (
    <div className="container">
      <div className="image-generique-page">
        <img src={process.env.GATSBY_API_URL + props.image} alt={props.name} />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
