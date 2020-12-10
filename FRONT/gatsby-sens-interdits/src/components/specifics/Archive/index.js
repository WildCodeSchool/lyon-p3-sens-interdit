import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

import FestivalPoster from "./FestivalPoster";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import Archives from "./Archives";
import sensinterdits2009 from "../../../assets/img/affiches/sensinterdits2009.jpeg";
import sensinterdits2011 from "../../../assets/img/affiches/sensinterdits2011.jpeg";
import sensinterdits2013 from "../../../assets/img/affiches/sensinterdits2013.jpeg";
import sensinterdits2015 from "../../../assets/img/affiches/sensinterdits2015.jpeg";
import sensinterdits2017 from "../../../assets/img/affiches/sensinterdits2017.jpeg";
import sensinterdits2019 from "../../../assets/img/affiches/sensinterdits2019.png";


import "./Archive.css";
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

        <Archives  />
      </div>
    </>
  );
}

export default Archive;
