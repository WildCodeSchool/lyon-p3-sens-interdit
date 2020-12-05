import React from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import ThumbnailOldArchive from "../../globals/ThumbnailOldarchive";
import { graphql, useStaticQuery } from "gatsby";

import "./Archive.css";
import { node } from "prop-types";

function Programme2011(props) {
  const { allStrapiArchivesOld } = useStaticQuery(graphql`
    query MyQueryArchive2011 {
      allStrapiArchivesOld(filter: { annee: { eq: "2011" } }) {
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
  `);
  const URL_IMAGE = "http://146.59.231.196:1337/images/archives";
  return (
    <>
      <ImageCarousel displayed={true} images={props.images} />
      <div className="global-margin archive-global-styling">
        <p className="archive-description">{node.presentation}</p>
        <h1 className="to-uppercase">
          Découvrez <span>les archives du festival 2011</span>
        </h1>
        <div className="archive-transmission-grid-wrapper">
          {allStrapiArchivesOld.edges.map(elem => (
            <ThumbnailOldArchive
              id={elem.node.strapiId}
              key={elem.node.id}
              country={elem.node.pays}
              name={elem.node.titre}
              team={elem.node.credits_2}
              affiche={URL_IMAGE + elem.node.photo_1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Programme2011;
