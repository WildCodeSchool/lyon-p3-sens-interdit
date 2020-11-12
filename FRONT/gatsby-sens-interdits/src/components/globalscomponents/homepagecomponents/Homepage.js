import React from "react"
import "./Homepage.css"
import lefestival from "../../../img/photosFiltre/lefestival.png"
import DisplayTabMenu from "./DisplayTabMenu"
import photoTest from "../../../img/img-sens-interdit.jpg"
import aveclespublics from "../../../img/photosFiltre/aveclespublics.png"
import spectaclesentournee from "../../../img/photosFiltre/spectaclesentournee.png"
import lassociation from "../../../img/photosFiltre/lassociation.png"

export default function Homepage() {
  return (
    <div className="global-homepage">
      <div className="slider">
        <img src={photoTest} alt="sens" />
      </div>
      <div className="content-homepage">
        <DisplayTabMenu image={lefestival} title="Le Festival" />
        <DisplayTabMenu image={aveclespublics} title="Avec les publics" />
        <DisplayTabMenu
          image={spectaclesentournee}
          title="Spectacles en tournée"
        />
        <DisplayTabMenu image={lassociation} title="L'association'" />
      </div>
    </div>
  )
}
