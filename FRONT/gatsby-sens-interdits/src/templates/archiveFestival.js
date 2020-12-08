import React from "react";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";
import Thumbnail from "../components/globals/Thumbnail";
import { graphql } from "gatsby";
import photoTest from "./../assets/img/img-sens-interdit.jpg";
import { sluggify } from "./../utils/Sluggify";

import "./archiveSpectacle.css";

function ArchivedFestival({ data }) {
  console.log(data, "ArchivedFestival");
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
          {data.allStrapiSpectacle.nodes.map(spectacle => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default ArchivedFestival;

export const query = graphql`
  query($year: Int) {
    allStrapiSpectacle(filter: { festival: { year: { eq: $year } } }) {
      nodes {
        thumbnail {
          internal {
            description
          }
        }
        strapiId
        title
        author
        country
        id
        strapiId
        title
        festival {
          year
        }
      }
    }
  }
`;
