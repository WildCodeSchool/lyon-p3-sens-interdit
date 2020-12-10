import React from "react";
import Thumbnail from "../components/globals/Thumbnail";
import { graphql } from "gatsby";
import photoTest from "./../assets/img/img-sens-interdit.jpg";
import { sluggify } from "./../utils/Sluggify";

import "./archiveSpectacle.css";

function ArchivedFestival({ data }) {
  return (
    <>
      <div className="global-margin archive-global-styling">
        <div className="image-generique-page">
          <img
            src={
              process.env.GATSBY_API_URL +
              data.allStrapiFestival.nodes[0].poster[0].url
            }
            alt={data.allStrapiFestival.nodes[0].title}
          />
        </div>
        <h1 className="to-uppercase">
          Edition {data.allStrapiFestival.nodes[0].year} -{" "}
          <span>{data.allStrapiFestival.nodes[0].title}</span>
        </h1>

        <div>{data.allStrapiFestival.nodes[0].content}</div>
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
    allStrapiFestival(filter: { year: { eq: $year } }) {
      nodes {
        year
        title
        title_en
        content
        content_en
        poster {
          url
        }
      }
    }
  }
`;
