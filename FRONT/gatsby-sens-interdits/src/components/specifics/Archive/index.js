import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

import FestivalPoster from "./FestivalPoster";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import Archives from "./Archives";
import sensinterdits2019 from "../../../assets/img/affiches/sensinterdits2019.png";

import "./Archive.css";
import LanguageContext from "../../context/LanguageContext";

function Archive(props) {
  const { LANG } = useContext(LanguageContext);

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
      allStrapiFestivalarchive {
        nodes {
          strapiId
          year
          poster {
            url
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

          {data.allStrapiFestivalarchive.nodes.map(oldArchivedFestival => {
            return (
              <FestivalPoster
                key={oldArchivedFestival.strapiId}
                title={`Edition ${oldArchivedFestival.year}`}
                poster={
                  `${process.env.GATSBY_API_URL}` +
                  oldArchivedFestival.poster[0].url
                }
                url={`programme/${oldArchivedFestival.year}`}
              />
            );
          })}
        </div>

        <Archives />
      </div>
    </>
  );
}

export default Archive;
