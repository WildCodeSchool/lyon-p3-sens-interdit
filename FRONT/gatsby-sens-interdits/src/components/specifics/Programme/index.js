import React, { useState, useEffect } from "react";
import "./Index.css";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import Thumbnail from "../../globals/Thumbnail";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

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
  }, []);

  function dateFilter(date) {
    const filteredList = fullList.filter(spectacle => {
      if (spectacle.day) {
        return dayjs(spectacle.day).isSame(dayjs(date), "day");
      } else {
        return false;
      }
    });

    setList(filteredList);
  }

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
        <h3>
          Something happened ?! <br />
          Please reload the page.
        </h3>
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
                ? dayjs(spectacle.day).format("ddd D MMM à HH:mm")
                : "inconnue"
            }
            country={spectacle.country ? spectacle.country : "inconnu"}
            name={spectacle.title}
            id={spectacle.strapiId}
            team={spectacle.author ? spectacle.author : "inconnu"}
            url={
              "http://localhost:8000/spectacle/" +
              spectacle.title.toLowerCase().replaceAll(" ", "-")
            }
          />
        );
      });
    }
  };
  return (
    <div className="global-programme-page">
      <ImageCarousel />
      <div className="content-programme-page">
        <div className="calendar-programme-page">
          <CalendarLarge dateSetter={dateFilter} />
        </div>
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
            <h3> supprimer filtres </h3>
          </a>
        </div>
        <div className="display-mini-tab"> {affichageList(list)} </div>
      </div>
    </div>
  );
}
