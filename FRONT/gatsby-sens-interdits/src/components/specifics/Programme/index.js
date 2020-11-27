import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Index.css";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import Thumbnail from "../../globals/Thumbnail";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";

export default function ProgrammePage(props) {
  const [list, setList] = useState("");

  const fullList = [];

  props.list.map(spectacle => {
    if (spectacle.horaires[0]) {
      return fullList.push(...listTreatment(spectacle));
    } else {
      return fullList.push(spectacle);
    }
  });

  function listTreatment(spectacle) {
    let treatment = [];
    spectacle.horaires.forEach(date => {
      let data = { ...spectacle };
      data.day = date.Day;

      treatment.push(data);
    });
    return treatment;
  }

  useEffect(() => {
    setList(fullList);
  }, [props]);

  function countryFilter(e) {
    e.preventDefault();
    const list2 = [...list];
    const countryList = list2.sort((a, b) => (a.country > b.country ? -1 : 1));
    setList(countryList);
  }

  function authorFilter(e) {
    e.preventDefault();
    const list2 = [...list];
    const authorList = list2.sort((a, b) => (a.author > b.author ? 1 : -1));
    setList(authorList);
  }

  function placeFilter(e) {
    e.preventDefault();
    const list2 = [...list];
    const placeList = list2.sort((a, b) => (a.place > b.place ? -1 : 1));
    setList(placeList);
  }
  function resetFilter(e) {
    e.preventDefault();
    setList(fullList);
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
            key={spectacle.title + spectacle.day}
            affiche={
              spectacle.thumbnail
                ? spectacle.thumbnail.internal.description.split('"')[1]
                : photoTest
            }
            date={
              spectacle.day
                ? moment(spectacle.day).format("ddd do MMM, H:mm ")
                : "inconnue"
            }
            country={spectacle.country ? spectacle.country : "inconnu"}
            name={spectacle.title}
            team={spectacle.author ? spectacle.author : "inconnu"}
          />
        );
      });
    }
  };
  //BACK/strapi-sens-interdits/public/uploads/Capture_d_ecran_de_2020_09_24_19_38_35_39c8a71ce4.png
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
        <div className="display-mini-tab"> {affichageList(list)} </div>
      </div>
    </div>
  );
}
