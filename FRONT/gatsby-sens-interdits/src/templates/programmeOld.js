import React from "react";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";
import ThumbnailOldArchive from "../components/globals/ThumbnailOldArchive";
import { graphql } from "gatsby";

import "./archiveSpectacle.css";

function Programme({ data }) {
  console.log(data, "programmeOld");
  return (
    <>
      {/* <ImageCarousel displayed={true} images={props.images} /> */}
      <div className="global-margin archive-global-styling">
        {/* <className="archive-description">
          {data.allStrapiArchivesOld.edges.node.presentation}
        </className=> */}
        <h1 className="to-uppercase">
          Découvrez{" "}
          {/* <span>les archives du festival {data.allStrapiArchivesOld.edges.node.annee}</span> */}
        </h1>
        <div className="archive-transmission-grid-wrapper">
          {data.allStrapiArchivesOld.nodes.map(elem => (
            <ThumbnailOldArchive
              id={elem.strapiId}
              key={elem.id}
              country={elem.pays}
              name={elem.titre}
              team={elem.credits_2}
              affiche={`${process.env.GATSBY_IMAGE_URL}` + elem.photo_1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Programme;

export const query = graphql`
  query MyQueryProgramme($annee: Date) {
    allStrapiArchivesOld(filter: { annee: { eq: $annee } }) {
      nodes {
        titre
        strapiId
        id
        credits_2
        pays
        photo_1
        presentation
        annee
      }
    }

    # , $year: Int

    # allStrapiSpectacle(filter: { festival: { year: { eq: $year } } }) {
    #   nodes {
    #     id
    #     strapiId
    #     title
    #     festival {
    #       year
    #     }
    #   }
    # }
  }
`;
