import React, { useState, useEffect } from "react"
import "./ProgrammePage.css"
import photoTest from "../../../img/img-sens-interdit.jpg"
import SpectacleMiniTab from "./SpectacleMiniTab"
import FilterTab from "./FilterTab"
import CalendarLarge from "./CalendarLarge"

export default function ProgrammePage(props) {
  const [list, setList] = useState(props.list)

  useEffect(() => {
    setList(props.list)
  }, [props])

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
      const date = "pouet"
      return list.map(spectacle => {
        console.log(spectacle)
        return (
          <SpectacleMiniTab
            key={spectacle.titre + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)}
            affiche={photoTest}
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
        <FilterTab />
        <div className="display-miniTab">{affichageList(list)}</div>
      </div>
    </div>
  )
}
