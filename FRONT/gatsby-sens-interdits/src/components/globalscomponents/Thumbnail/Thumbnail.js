import React from "react"
import "./Thumbnail.css"
import picto from "../../../img/picto+.svg"

const Thumbnail = () => {
  return (
    <div style={{ margin: "10px 10px" }}>
      <div className="spectacle-image">
        <span className="spectacle-date">mer 16 Oct </span>
        <span className="spectacle-country">Russie</span>

        <img src={picto} alt="pictogramme cliquable" weight="50" height="50" />
      </div>
      <div className="spectacle-title">
        <h2>Ma petite Antarctique</h2>
        <h3>Tatiana Frovola</h3>
      </div>
    </div>
  )
}

export default Thumbnail
