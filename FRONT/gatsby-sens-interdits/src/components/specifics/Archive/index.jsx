import React, { useContext } from "react";
import FestivalPoster from "./FestivalPoster";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import FilterTab from "../Programme/FilterTab";

import ThumbnailOldArchive from "../../globals/ThumbnailOldarchive";
import { graphql, useStaticQuery } from "gatsby";
import sensinterdits2009 from "../../../assets/img/affiches/sensinterdits2009.jpeg";
import sensinterdits2011 from "../../../assets/img/affiches/sensinterdits2011.jpeg";
import sensinterdits2013 from "../../../assets/img/affiches/sensinterdits2013.jpeg";
import sensinterdits2015 from "../../../assets/img/affiches/sensinterdits2015.jpeg";
import sensinterdits2017 from "../../../assets/img/affiches/sensinterdits2017.jpeg";
import sensinterdits2019 from "../../../assets/img/affiches/sensinterdits2019.png";
import Thumbnail from "../../globals/Thumbnail";
import FilterBySelect from "./FilterBySelect";


import "./Archive.css";
import "../../../assets/styles/global.css";
import LanguageContext from "../../context/LanguageContext";

function Archive(props) {
  const { LANG } = useContext(LanguageContext);

  const festivals = [
    {
      title: "Édition 2019",
      posterUrl:sensinterdits2019,
      url:"http://localhost:8000/programme/2019",
      annee:2019
    },
    {
      title: "Édition 2017",
      posterUrl:sensinterdits2017,
      url:"#",
    },
    {
      title: "Édition 2015",
      posterUrl:sensinterdits2015,
      url:"#",
    },
    {
      title: "Édition 2013",
      posterUrl:sensinterdits2013,
      url:"#",
    },
    {
      title: "Édition 2011",
      posterUrl:sensinterdits2011,
      url:"#",
    },
    {
      title: "Édition 2009",
      posterUrl:sensinterdits2009,
      url:"#",
    },
  ];


  const data = useStaticQuery(graphql`
    query MyQueryArchive {
      strapiArchiveDescription {
        title
        title_en
        description
        description_en
      }
      allStrapiArchivesOld {
        edges {
          node {
            titre
            id
            credits_2
            pays
            photo_1
          }
        }
      }
    }
  `);


  return (
    <>
      <ImageCarousel
        displayed={true}
        images={props.images}
        title={props.title ? props.title : ""}
      />
      <div className="container archive-global-styling">
        <p className="archive-description">
          {data.strapiArchiveDescription["description" + LANG]}
        </p>
        {LANG !== "_en" ? (
          <h1 className="to-uppercase">
            Découvrez <span>les archives du festival</span>
          </h1>
        ) : (
          <h1 className="to-uppercase">
            Discover <span>the festival's archives</span>
          </h1>
        )}
        <div className="archive-festivals-grid-wrapper">
          {festivals.map(festival => {
            return (
              <FestivalPoster
                title={festival.title}
                poster={festival.posterUrl}
                url={festival.url}
              />
            );
          })}
        </div>
        {LANG !== "_en" ? (
          <h1 className="to-uppercase">
            Découvrez <span>les archives diffusion-production</span>
          </h1>
        ) : (
          <h1 className="to-uppercase">
            Discover <span>the production's archives</span>
          </h1>
        )}
        <FilterBySelect />
        <div className="archive-transmission-grid-wrapper">

        {allStrapiArchivesOld.edges.map(elem => (
          <ThumbnailOldArchive
            id={elem.node.strapiId}
            key={elem.node.id}
            country={elem.node.pays}
            name={elem.node.titre}
            team={elem.node.credits_2}
            affiche={`${process.env.GATSBY_IMAGE_URL}`+elem.node.photo_1}
          />
            
        ))}
        
          {data.allStrapiArchivesOld.edges.map(elem => (
            <Thumbnail
              key={elem.node.id}
              id={elem.node.id}
              url={"/" + elem.node.id}
              date={elem.node.date_1}
              country={elem.node.pays}
              name={elem.node.titre}
              team={elem.node.credits_2}
              affiche={process.env.GATSBY_API_URL + "/images/archives/" + elem.node.photo_1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Archive;
