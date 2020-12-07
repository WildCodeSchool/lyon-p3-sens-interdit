import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./Index.css";
import "../../../assets/styles/global.css";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu.js";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import LanguageContext from "../../context/LanguageContext";
import { FestivalContext } from "../../context/FestivalContext";

export default function Homepage() {
  const { LANG } = useContext(LanguageContext);
  const { currentFestivalStrapiId, currentFestivalTitle } = useContext(
    FestivalContext
  );

  const data = useStaticQuery(graphql`
    query MyQueryHome {
      strapiHomepage {
        carousel {
          id
          image {
            id
            image {
              url
            }
          }
        }
        id
        description
        festival {
          title
          title_en
          visible
          image {
            url
          }
        }
        publics {
          title
          title_en
          visible
          image {
            url
          }
        }
        tour {
          title
          title_en
          visible
          image {
            url
          }
        }
        association {
          title
          title_en
          visible
          image {
            url
          }
        }
      }
      allStrapiSpectacle {
        nodes {
          title
          id
          author
          country
          archive
          reserver
          carousel {
            id
            image {
              credit
              id
              image {
                url
              }
            }
          }
        }
      }
    }
  `);
  const imageArray =
    data.strapiHomepage.carousel !== null
      ? data.strapiHomepage.carousel.image.map(image => image.image)
      : false;

  const redSquareArray =
    data.strapiHomepage.carousel !== null
      ?
      data.allStrapiSpectacle.nodes.map(spec => {
        if (spec.archive === false) {
          return spec
        }
      }
      )
      : false;
  let randomSpectacle = redSquareArray[Math.floor(Math.random() * Math.floor(redSquareArray.length))];
  return (
    <>
      <ImageCarousel images={imageArray} title={randomSpectacle.title} booking={randomSpectacle.reserver} displayed={true} />

      <div className="global-homepage container">
        {data.strapiHomepage.description ? (
          <div>
            <div className="red-arrow"></div>
            <div className="description-content">
              {data.strapiHomepage.description}
            </div>
          </div>
        ) : null}

        <div className="content-homepage">
          {data.strapiHomepage.festival.visible ? (
            <DisplayTabMenu
              title={data.strapiHomepage.festival["title" + LANG]}
              url={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}`}
              // TODO: gestion context pas de festival en cours (boolean false sur chaque festival)
              image={data.strapiHomepage.festival.image[0].url}
            />
          ) : null}
          {data.strapiHomepage.publics.visible ? (
            <DisplayTabMenu
              title={data.strapiHomepage.publics["title" + LANG]}
              url={`/transmissions`}
              image={data.strapiHomepage.publics.image[0].url}
            />
          ) : null}
          {data.strapiHomepage.tour.visible ? (
            <DisplayTabMenu
              title={data.strapiHomepage.tour["title" + LANG]}
              url={`/programme-tour`}
              image={data.strapiHomepage.tour.image[0].url}
            />
          ) : null}
          {data.strapiHomepage.association.visible ? (
            <DisplayTabMenu
              title={data.strapiHomepage.association["title" + LANG]}
              url={`/association`}
              image={data.strapiHomepage.association.image[0].url}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
