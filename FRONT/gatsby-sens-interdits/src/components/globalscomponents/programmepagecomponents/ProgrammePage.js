import React from "react"
import "./ProgrammePage.css"
import photoTest from "../../../img/img-sens-interdit.jpg"
import Thumbnail from "./../Thumbnail/Thumbnail"
import FilterTab from "./FilterTab"
import CalendarLarge from "../Calendar/CalendarLarge"

export default function ProgrammePage() {
  return (
    <div class="global-programmepage">
      <div className="slider">
        <img src={photoTest} alt="sens" />
      </div>
      <div className="content-programmepage">
        <CalendarLarge />
        <FilterTab />
        <div className="display-miniTab">
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
        </div>
      </div>
    </div>
  )
}
