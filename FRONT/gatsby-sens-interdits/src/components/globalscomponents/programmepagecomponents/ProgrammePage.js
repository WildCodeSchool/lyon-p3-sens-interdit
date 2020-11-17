import React, { useState, useEffect } from "react"
import "./ProgrammePage.css"
import photoTest from "../../../img/img-sens-interdit.jpg"
import SpectacleMiniTab from "./SpectacleMiniTab"
//import FilterTab from "./FilterTab"
import CalendarLarge from "./CalendarLarge"
//import pouet from "../../../../public/"
import "./FilterTab.css"

export default function ProgrammePage(props) {
  const [list, setList] = useState(props.list)

  useEffect(() => {
    setList(props.list)
  }, [props])

  function countryFilter(e) {
    e.preventDefault()
    console.log("Le filtre pays a été cliqué.")
  }

  function authorFilter(e) {
    e.preventDefault()
    console.log("Le filtre metteur en scene a été cliqué.")
  }

  function placeFilter(e) {
    e.preventDefault()
    console.log("Le filtre lieu a été cliqué.")
  }
  function resetFilter(e) {
    e.preventDefault()
    console.log("Les filtres sont reinitialisés.")
  }

  const affichageList = () => {
    console.log("AAAAAAAAAAAAAAAA", "list")
    if (list.length === 0) {
      return (
        <img
          src="https://media.giphy.com/media/WiIuC6fAOoXD2/giphy.gif"
          alt="loading"
        />
      )
    } else {
      return list.map(spectacle => {
        console.log(spectacle.all_photos.photo_1)
        return (
          <SpectacleMiniTab
            key={
              spectacle.titre +
              Math.floor(Math.random() * 10) +
              Math.floor(Math.random() * 10)
            }
            affiche={
              spectacle.all_photos.photo_1 != undefined
                ? spectacle.all_photos.photo_1
                : photoTest
            }
            date={
              spectacle.info_pratique.dates === undefined ||
              spectacle.info_pratique.dates.date_1 === undefined
                ? "inconnu"
                : spectacle.info_pratique.dates.date_1
            }
            country={
              spectacle.credits === undefined ||
              spectacle.credits.pays === undefined
                ? "inconnu"
                : spectacle.credits.pays
            }
            name={spectacle.titre}
            team={
              spectacle.credits === undefined ||
              spectacle.credits.auteur === undefined
                ? "inconnu"
                : spectacle.credits.auteur
            }
          />
        )
      })
    }
  }

  return (
    <div className="global-programmepage">
      <div className="slider">
        <img src={photoTest} alt="sens" />
      </div>
      <div className="content-programmepage">
        <CalendarLarge />
        <div className="global-FilterTab">
          <h2> FILTREZ PAR: </h2>
          <a href="#" onClick={countryFilter}>
            <p> PAYS </p>
          </a>
          <a href="#" onClick={authorFilter}>
            <p> METTEUR EN SCÈNE </p>
          </a>
          <a href="#" onClick={placeFilter}>
            <p> LIEUX </p>
          </a>
          <a href="#" onClick={resetFilter}>
            <h3> supprimer </h3>
          </a>
        </div>
        <div className="display-miniTab"> {affichageList(list)} </div>
      </div>
    </div>
  )
}
