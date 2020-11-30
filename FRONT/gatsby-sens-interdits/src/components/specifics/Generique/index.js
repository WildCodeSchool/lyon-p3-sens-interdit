import React from "react";
import TabSystemV from "../../globals/TabSystems/TabSystemV.js";
import "./index.css";
export default function GeneriquePage(props) {
  return (
    <div className="global-generique-page">
      <div className="image-generique-page">
        <img src={process.env.GATSBY_API_URL + props.image} alt={props.name} />
      </div>
      <div className="global-margin">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <TabSystemV tabContent={props.tab_element} />
      </div>
    </div>
  );
}
