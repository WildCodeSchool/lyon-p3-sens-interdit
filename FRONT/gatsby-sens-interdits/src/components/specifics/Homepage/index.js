import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./Index.css";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu.js";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import LanguageContext from "../../context/LanguageContext";
import { FestivalContext } from "../../context/FestivalContext";

export default function Homepage() {
  const { LANG } = useContext(LanguageContext);
  const { currentFestivalStrapiId, currentFestivalTitle } = useContext(
    FestivalContext
  );

  const { strapiHomepage } = useStaticQuery(graphql`
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
    }
  `);
  const imageArray =
    strapiHomepage.carousel !== null
      ? strapiHomepage.carousel.image.map(image => image.image)
      : false;
  return (
    <>
      <ImageCarousel images={imageArray} />

      <div className="global-homepage">
        {strapiHomepage.description ? (
          <div>
            <div className="red-arrow"></div>
            <div className="description-content">
              {strapiHomepage.description}
            </div>
          </div>
        ) : null}

        <div className="content-homepage">
          {/* {strapiHomepage.squaremenu.map(elem => (
            <DisplayTabMenu
              key={elem.id}
              title={elem["title" + LANG]}
              image={elem.image[0].url}
              url={elem.url}
            />
          ))} */}

          {strapiHomepage.festival.visible ? (
            <DisplayTabMenu
              title={strapiHomepage.festival["title" + LANG]}
              url={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}`}
              // url={`/festival`}
              image={strapiHomepage.festival.image[0].url}
            />
          ) : null}
          {strapiHomepage.publics.visible ? (
            <DisplayTabMenu
              title={strapiHomepage.publics["title" + LANG]}
              url={`/transmissions`}
              image={strapiHomepage.publics.image[0].url}
            />
          ) : null}
          {strapiHomepage.tour.visible ? (
            <DisplayTabMenu
              title={strapiHomepage.tour["title" + LANG]}
              url={`/programme-tour`}
              image={strapiHomepage.tour.image[0].url}
            />
          ) : null}
          {strapiHomepage.association.visible ? (
            <DisplayTabMenu
              title={strapiHomepage.association["title" + LANG]}
              url={`/association`}
              image={strapiHomepage.association.image[0].url}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
