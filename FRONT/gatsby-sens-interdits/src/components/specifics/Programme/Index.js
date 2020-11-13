import React from "react"
import "./Index.css"
import photoTest from "../../../assets/img/img-sens-interdit.jpg"
import Thumbnail from "../../globals/Thumbnail"
import FilterTab from "./FilterTab"
import CalendarLarge from "../../globals/Calendar/CalendarLarge"
import ImageCarousel from "../../globals/Carousel/ImageCarousel"

export default function ProgrammePage() {
  return (
    <div className="global-programmepage">
      <ImageCarousel />
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
