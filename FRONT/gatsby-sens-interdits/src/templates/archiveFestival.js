import React, { useContext } from "react";
import Thumbnail from "../components/globals/Thumbnail";
import { graphql } from "gatsby";
import photoTest from "./../assets/img/img-sens-interdit.jpg";
import { sluggify } from "./../utils/Sluggify";
import SEO from "../components/SEO/seo";
import "./archiveSpectacle.css";
import LanguageContext from "../components/context/LanguageContext";

function ArchivedFestival({ data }) {
  const { checkEnContext } = useContext(LanguageContext);

  return (
    <>
      <SEO
        title={checkEnContext(
          data.allStrapiFestival.nodes[0].title,
          data.allStrapiFestival.nodes[0].title_en
        )}
        description={checkEnContext(
          data.allStrapiFestival.nodes[0].content,
          data.allStrapiFestival.nodes[0].content_en
        )}
        image={
          data.allStrapiFestival.nodes[0].poster[0].url !== undefined
            ? data.allStrapiFestival.nodes[0].poster[0].url
            : ""
        }
      />
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
          <span>
            {checkEnContext(
              data.allStrapiFestival.nodes[0].title,
              data.allStrapiFestival.nodes[0].title_en
            )}
          </span>
        </h1>

        <div>
          {checkEnContext(
            data.allStrapiFestival.nodes[0].content,
            data.allStrapiFestival.nodes[0].content_en
          )}
        </div>
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
              country={checkEnContext(spectacle.country, spectacle.country_en)}
              name={checkEnContext(spectacle.title, spectacle.title_en)}
              id={spectacle.strapiId}
              team={spectacle.author ? spectacle.author : "inconnu"}
              url={`/archives/spectacle/${sluggify(
                checkEnContext(spectacle.title, spectacle.title_en)
              )}_${spectacle.strapiId}`}
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
        title_en
        author
        country
        country_en
        id
        strapiId
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
