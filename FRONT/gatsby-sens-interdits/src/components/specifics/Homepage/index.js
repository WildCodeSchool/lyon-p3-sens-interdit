import React, { useContext, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./Index.css";
import "../../../assets/styles/global.css";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu.js";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import LanguageContext from "../../context/LanguageContext";
import { FestivalContext } from "../../context/FestivalContext";
import SEO from "../../SEO/seo";


export default function Homepage() {
  const [random, setRandom] = useState(0);
  const { LANG, checkEnContext } = useContext(LanguageContext);
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
        description_en
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
        seo_home {
          description
          description_en
          image {
            url
          }
          image_en {
            url
          }
          title
          title_en
        }
      }
      allStrapiSpectacle {
        nodes {
          title
          title_en
          id
          author
          country
          country_en
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
  const redSquareArray =
    data.strapiHomepage.carousel !== null
      ? data.allStrapiSpectacle.nodes.filter(spec => spec.archive === false)
      : false;
  const imageArray =
    data.allStrapiSpectacle.carousel !== null
      ? redSquareArray[random].carousel.image.map(image => image.image)
      : false;

  let seo = data.strapiHomepage.seo_home;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en: seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;

  useEffect(() => {
    setRandom(Math.floor(Math.random() * Math.floor(redSquareArray.length)));
  }, []);

  return (
    <>
      <SEO title={title !== undefined ? title : ""}
        description={description !== undefined ? description : ""}
        image={image !== undefined ? image : ""} />
      <ImageCarousel
        images={imageArray}
        title={checkEnContext(
          redSquareArray[random].title,
          redSquareArray[random].title_en
        )}
        booking={redSquareArray[random].reserver}
        country={checkEnContext(
          redSquareArray[random].country,
          redSquareArray[random].country_en
        )}
        displayed={true}
      />

      <div className="global-homepage container">
        {data.strapiHomepage["description" + LANG] ? (
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
              title={checkEnContext(
                data.strapiHomepage.festival.title,
                data.strapiHomepage.festival.title_en
              )}
              url={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}`}
              // TODO: gestion context pas de festival en cours (boolean false sur chaque festival)
              image={data.strapiHomepage.festival.image[0].url}
            />
          ) : null}
          {data.strapiHomepage.publics.visible ? (
            <DisplayTabMenu
              title={checkEnContext(
                data.strapiHomepage.publics.title,
                data.strapiHomepage.publics.title_en
              )}
              url={`/transmissions`}
              image={data.strapiHomepage.publics.image[0].url}
            />
          ) : null}
          {data.strapiHomepage.tour.visible ? (
            <DisplayTabMenu
              title={checkEnContext(
                data.strapiHomepage.tour.title,
                data.strapiHomepage.tour.title_en
              )}
              url={`/programme-tour`}
              image={data.strapiHomepage.tour.image[0].url}
            />
          ) : null}
          {data.strapiHomepage.association.visible ? (
            <DisplayTabMenu
              title={checkEnContext(
                data.strapiHomepage.association.title,
                data.strapiHomepage.association.title_en
              )}
              url={`/association`}
              image={data.strapiHomepage.association.image[0].url}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
