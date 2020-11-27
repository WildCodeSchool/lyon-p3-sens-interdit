import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Index.css";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import Thumbnail from "../../globals/Thumbnail";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";

/* 
let data = {
    a: 'aaaa',
    b: 'aaaa',
    c: 'aaaa',
    horaires: [{Day: 1},{Day: 2},{Day: 3}]
}
let datas = [];
data.horaires.forEach(date => {
   let data2 = Object.assign({}, data);
   data2.Day = date.Day;
   datas.push(data2);
});
console.log(datas);
})
 */

function listTreatment(spectacle) {
  let treatment = [];
  spectacle.horaires.forEach(date => {
    let data = { ...spectacle };
    data.day = date.Day;
    console.log("data", data);
    treatment.push(data);
  });
  return treatment;
}

export default function ProgrammePage(props) {
  const [list, setList] = useState("");

  useEffect(() => {
    let fullList = [];
    props.list.map(spectacle => {
      if (spectacle.horaires[0]) {
        return fullList.push(...listTreatment(spectacle));
      } else {
        return fullList.push(spectacle);
      }
    });
    console.log("full list", fullList);
    /* .horaires.forEach(date => {
      let data = { ...props.list };
      data.day = date.Day;
      treatment.push(data);
    }); */

    setList(fullList);
  }, [props]);

  function countryFilter(e) {
    e.preventDefault();
    console.log("Le filtre pays a été cliqué.");
    console.log(list[5]);
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
            key={spectacle.title+spectacle.day}
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
