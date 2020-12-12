import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Index.css";
import "./FilterTab";
import { graphql, useStaticQuery } from "gatsby";
import "../../../assets/styles/global.css";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import Thumbnail from "../../globals/Thumbnail";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import SEO from "../../SEO/seo";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { sluggify } from "../../../utils/Sluggify";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function ProgrammePage(props) {
  //-----------------CAROUSEL START
  const [random, setRandom] = useState(0);
  const { LANG, checkEnContext } = useContext(LanguageContext);
  const data = useStaticQuery(graphql`
  query MyQueryProg {
    allStrapiSpectacle {
      nodes {
        title
        id
        author
        country
        archive
        reserver
        carousel {
          id
          image {
            credit
            id
            image {
              url
            }
          }
        }
      }
    }
    strapiProgramme {
      seo_programme {
        description
        description_en
        image {
          url
        }
        image_en {
          url
        }
        title
        title_en
      }
    }
  }
`);

const title = data.strapiProgramme.seo_programme.title;
const title_en = data.strapiProgramme.seo_programme.title_en;
const description = data.strapiProgramme.seo_programme.description;
const description_en = data.strapiProgramme.seo_programme.description_en;
const image = data.strapiProgramme.seo_programme.image[0].url;
const image_en = data.strapiProgramme.seo_programme.image_en[0].url;


  const redSquareArray =
    data.allStrapiSpectacle.nodes.carousel !== null
      ? data.allStrapiSpectacle.nodes.filter(spec => spec.archive === false)
      : false;
  const imageArray =
    data.allStrapiSpectacle.nodes.carousel !== null
      ? redSquareArray[random].carousel.image.map(image => image.image)
      : false;

  useEffect(() => {
    setRandom(Math.floor(Math.random() * Math.floor(redSquareArray.length)));
  }, []);
  //-----------------CAROUSEL END

  //-----------------PROGRAM START
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
          {checkEnContext(
            "Il n'y a pas d'évènement à cette date.",
            "There is no event programmed for this date"
          )}
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
  //------------PROGRAM END
  return (
    <div className="global-programme-page">
      <SEO title={checkEnContext(title, title_en)} 
        description={checkEnContext(description, description_en)}  
        image={image !== undefined ? checkEnContext(image, image_en) : ""} />
      <ImageCarousel
        images={imageArray}
        title={checkEnContext(
          redSquareArray[random].title,
          redSquareArray[random].title_en
        )}
        booking={redSquareArray[random].reserver}
        country={checkEnContext(
          redSquareArray[random].country,
          redSquareArray[random].country_en
        )}
        displayed={true}
      />
      <div className="content-programme-page container">
        <div className="calendar-programme-page">
          <CalendarLarge dateSetter={dateFilter} />
        </div>
        <div className="global-Filter-tab to-uppercase">
          <h2>{
            checkEnContext(
              "Trier par :",
              "Sort by :"
            )}</h2>
          <a role="button" onClick={countryFilter}>
            <p>{
              checkEnContext(
                "Pays",
                "Country"
              )}</p>
          </a>
          <a role="button" onClick={authorFilter}>
            <p>{
              checkEnContext(
                "Metteur en scène",
                "Director"
              )} </p>
          </a>
          <a role="button" onClick={placeFilter}>
            <p>{
              checkEnContext(
                "Lieux",
                "Place"
              )}</p>
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
