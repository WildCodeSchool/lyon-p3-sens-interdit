import React from "react"
import "./Thumbnail.css"
import pictoPlus from "../../../img/picto+.svg"

export default function Thumbnail(props) {
  return (
    <div className="miniTab">
      <div className="global-miniTab">
        <img
          className="img-miniTab"
          src={props.affiche}
          alt="image du spectacle"
          width="fit-content"
        />
        <div className="title-miniTab">
          <p className="date-miniTab">{props.date}</p>
          <p className="country-miniTab">{props.country}</p>
        </div>
        <img className="pictoPlus" src={pictoPlus} alt="pictoPlus" width="20" />
      </div>
      <div>
        <p className="name-miniTab">{props.name}</p>
        <p className="team-miniTab">{props.team}</p>
      </div>
    </div>
  )
}
