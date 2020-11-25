import React, { useState, useEffect } from "react";
import "./Index.css";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import Thumbnail from "../../globals/Thumbnail";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";

export default function ProgrammePage(props) {
  const [list, setList] = useState(props.list);

  useEffect(() => {
    
    setList(props.list);
  }, [props]);

  function countryFilter(e) {
    e.preventDefault();
    console.log("Le filtre pays a été cliqué.");
  }

  function authorFilter(e) {
    e.preventDefault();
    console.log("Le filtre metteur en scene a été cliqué.");
  }

  function placeFilter(e) {
    e.preventDefault();
    console.log("Le filtre lieu a été cliqué.");
  }
  function resetFilter(e) {
    e.preventDefault();
    console.log("Les filtres sont reinitialisés.");
  }

  const affichageList = () => {
    
    if (list.length === 0 || list === undefined) {
      return (
        <img
          src="https://media.giphy.com/media/WiIuC6fAOoXD2/giphy.gif"
          alt="loading"
        />
      );
    } else {
      return list.map(spectacle => {
        return (
          <Thumbnail
            key={
              spectacle.id
            }
            affiche={photoTest}
            date={spectacle.created_at}
            country={"inconnu"}
            name={spectacle.title}
            team={"inconnu"}
            props={...spectacle}
          />
        );
      });
    }
  };
  return (
    <div className="global-programme-page">
      <ImageCarousel />
      <div className="content-programme-page">
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
  );
}
