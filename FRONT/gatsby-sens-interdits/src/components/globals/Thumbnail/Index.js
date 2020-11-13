import React from "react"
import "./Index.css"
import pictoPlus from "../../../assets/img/picto+.svg"

export default function Thumbnail(props) {
  return (
    <div className="miniTab">
      <div className="global-miniTab">
        <img
          className="img-miniTab"
          src={props.affiche}
          alt="visuel du spectacle"
          width="fit-content"
        />
        <div className="title-miniTab">
          <p className="date-miniTab">{props.date}</p>
          <p className="country-miniTab">{props.country}</p>
        </div>
        <img className="pictoPlus" src={pictoPlus} alt="pictogramme" width="20" />
      </div>
      <div>
        <p className="name-miniTab">{props.name}</p>
        <p className="team-miniTab">{props.team}</p>
      </div>
    </div>
  )
}