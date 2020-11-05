import React from "react"
import "./Homepage.css"
import DisplayTabMenu from "./DisplayTabMenu"
import Slider from "../Slider/Slider"

export default function Homepage() {
  return (
    <div className="global-homepage">
      <Slider />
      <div className="content-homepage">
        <DisplayTabMenu />
        <DisplayTabMenu />
        <DisplayTabMenu />
        <DisplayTabMenu />
      </div>
    </div>
  )
}
