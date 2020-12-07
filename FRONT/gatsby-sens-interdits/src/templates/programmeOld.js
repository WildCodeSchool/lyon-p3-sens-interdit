import React from "react";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";
import ThumbnailOldArchive from "../components/globals/ThumbnailOldarchive";
import { graphql } from "gatsby";

import "./archiveSpectacle.css";

function Programme({ data }) {
  return (
    <>
      {/* <ImageCarousel displayed={true} images={props.images} /> */}
      <div className="global-margin archive-global-styling">
        {/* <p className="archive-description">
          {data.allStrapiArchivesOld.edges.node.presentation}
        </p> */}
        <h1 className="to-uppercase">
          Découvrez{" "}
          {/* <span>les archives du festival {data.allStrapiArchivesOld.edges.node.annee}</span> */}
        </h1>
        <div className="archive-transmission-grid-wrapper">
          {data.allStrapiArchivesOld.edges.node.map(elem => (
            <ThumbnailOldArchive
              id={elem.node.strapiId}
              key={elem.node.id}
              country={elem.node.pays}
              name={elem.data.allStrapiArchivesOld.titre}
              team={elem.data.allStrapiArchivesOld.credits_2}
              affiche={
                `${process.env.GATSBY_IMAGE_URL}` +
                elem.data.allStrapiArchivesOld.photo_1
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Programme;

export const query = graphql`
  query MyQueryProgramme($annee: DateQueryOperatorInput) {
    allStrapiArchivesOld(filter: { annee: $annee }) {
      edges {
        node {
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
    }
  }
`;
