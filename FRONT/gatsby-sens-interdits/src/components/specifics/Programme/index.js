import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Index.css";
import "./FilterTab";
import "../../../assets/styles/global.css";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import Thumbnail from "../../globals/Thumbnail";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { sluggify } from "../../../utils/Sluggify";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function ProgrammePage(props) {
  const [list, setList] = useState("");
  const { language } = useContext(LanguageContext);

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

  const majState = () => {
    setList(fullList);
  };

  useEffect(() => {
    majState();
  }, [props.list]);

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
          {language === "fr"
            ? "Il n'y a pas d'évènement à cette date."
            : "There is no event programmed for this date"}
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
            url={"/spectacle/" + sluggify(spectacle.title)}
          />
        );
      });
    }
  };
  return (
    <div className="global-programme-page">
      <ImageCarousel />
      <div className="content-programme-page container">
        <div className="calendar-programme-page">
          <CalendarLarge dateSetter={dateFilter} />
        </div>
        <div className="global-Filter-tab to-uppercase">
          <h2>{language === "fr" ? "Trier par : " : "Sort by : "}</h2>
          <a role="button" onClick={countryFilter}>
            <p>{language === "fr" ? "Pays" : "Country"}</p>
          </a>
          <a role="button" onClick={authorFilter}>
            <p> {language === "fr" ? "Metteur en scène" : "Director"} </p>
          </a>
          <a role="button" onClick={placeFilter}>
            <p> {language === "fr" ? "Lieux" : "Place"} </p>
          </a>
          <a role="button" onClick={resetFilter} className="">
            <p className="reset-filter-programme">↺</p>
          </a>
        </div>
        <div className="display-mini-tab"> {affichageList(list)} </div>
      </div>
    </div>
  );
}
