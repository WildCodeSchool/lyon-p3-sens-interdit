import React, { useContext } from "react";
import FestivalPoster from "./FestivalPoster";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import FilterTab from "../Programme/FilterTab";
import ThumbnailOldArchive from "../../globals/ThumbnailOldArchive";
import { graphql, useStaticQuery } from "gatsby";
import sensinterdits2009 from "../../../assets/img/affiches/sensinterdits2009.jpeg";
import sensinterdits2011 from "../../../assets/img/affiches/sensinterdits2011.jpeg";
import sensinterdits2013 from "../../../assets/img/affiches/sensinterdits2013.jpeg";
import sensinterdits2015 from "../../../assets/img/affiches/sensinterdits2015.jpeg";
import sensinterdits2017 from "../../../assets/img/affiches/sensinterdits2017.jpeg";
import sensinterdits2019 from "../../../assets/img/affiches/sensinterdits2019.png";

import FilterBySelect from "./FilterBySelect";

import "./Archive.css";
import "../../../assets/styles/global.css";
import LanguageContext from "../../context/LanguageContext";

function Archive(props) {
  const { LANG } = useContext(LanguageContext);

  const festivals = [
    {
      title: "Édition 2019",
      posterUrl: sensinterdits2019,
      url: "programme/2019",
      annee: 2019,
    },
    {
      title: "Édition 2017",
      posterUrl: sensinterdits2017,
      url: "programme/2017",
    },
    {
      title: "Édition 2015",
      posterUrl: sensinterdits2015,
      url: "programme/2015",
    },
    {
      title: "Édition 2013",
      posterUrl: sensinterdits2013,
      url: "programme/2013",
    },
    {
      title: "Édition 2011",
      posterUrl: sensinterdits2011,
      url: "programme/2011",
    },
    {
      title: "Édition 2009",
      posterUrl: sensinterdits2009,
      url: "programme/2009",
    },
  ];

  const data = useStaticQuery(graphql`
    query MyQueryArchive {
      allStrapiArchivesOld(filter: { categorie: { eq: "hors_scene" } }) {
        edges {
          node {
            titre
            strapiId
            id
            credits_2
            pays
            photo_1
          }
        }
      }
      allStrapiFestival(filter: { visible: { eq: false } }) {
        nodes {
          title
          strapiId
          year
          id
        }
      }
    }
  `);

  console.log(
    data.allStrapiFestival.nodes,
    "Archive Old festival + spectacle hors - scene + new site festival archive"
  );
  return (
    <>
      <ImageCarousel
        displayed={true}
        images={props.images}
        title={props.title ? props.title : ""}
      />
      <div className="container archive-global-styling">
        {LANG !== "_en" ? (
          <h1 className="to-uppercase">
            Découvrez <span>les archives du festival</span>
          </h1>
        ) : (
          <h1 className="to-uppercase">
            Explore <span>the festival's archives</span>
          </h1>
        )}
        <FilterTab />
        <div className="archive-festivals-grid-wrapper">
          {/* display new website festival archive */}

          {data.allStrapiFestival.nodes.map(archivedFestival => {
            return (
              <FestivalPoster
                key={archivedFestival.strapiId}
                title={`Edition ${archivedFestival.year}`}
                poster={sensinterdits2019}
                url={`programme/${archivedFestival.year}`}
              />
            );
          })}

          {/* display old website festival archive */}

          {festivals.map((festival, i) => {
            return (
              <FestivalPoster
                key={i}
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
            Explore <span>the production's archives</span>
          </h1>
        )}

        {/* Archive Page - display off stage spectacle */}

        <FilterTab />
        <FilterBySelect />
        <div className="archive-transmission-grid-wrapper">
          {data.allStrapiArchivesOld.edges.map(elem => (
            <ThumbnailOldArchive
              id={elem.node.strapiId}
              key={elem.node.id}
              country={elem.node.pays}
              name={elem.node.titre}
              team={elem.node.credits_2}
              affiche={`${process.env.GATSBY_IMAGE_URL}` + elem.node.photo_1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Archive;
