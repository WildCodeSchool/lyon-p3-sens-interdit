import React from "react"
import "./Slider.css"
import image from "../../../img/img-sens-interdit.jpg"

const Slider = () => {
  return (
    <div className="container">
      <img src={image} />
      <div className="red"></div>
      <div className="image-text">
        <p>PEER GYNT FROM KOSOVO</p>
        <button>Réserver</button>
      </div>
    </div>
  )
}

export default Slider
