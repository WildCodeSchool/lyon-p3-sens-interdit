import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./Association.css";
import "../../../assets/styles/global.css";
import { graphql, useStaticQuery } from "gatsby";
import TabSystemV from "../../globals/TabSystems/TabSystemV";

export default function AssociationPage() {
  const { checkEnContext } = useContext(LanguageContext);
  const { strapiAssopage } = useStaticQuery(graphql`
    query MyQueryAsso {
      strapiAssopage {
        id
        title
        title_en
        content
        content_en
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
        tab_element {
          content
          id
          title
          credited_image {
            id
            redtitle
            credit
            image {
              url
            }
          }
        }
        tab_element_en {
          content
          id
          title
          credited_image {
            id
            redtitle
            credit
            image {
              url
            }
          }
        }
      }
    }
  `);
  const imageArray =
    strapiAssopage.carousel !== null
      ? strapiAssopage.carousel.image.map(image => image.image)
      : false;
  return (
    <>
      <ImageCarousel images={imageArray} />
      <div className="container">
        <div className="red-arrow"></div>
        <div className="association-content">
          <h1 className="to-uppercase">
            {checkEnContext(strapiAssopage.title, strapiAssopage.title_en)}
          </h1>
          <p>
            {checkEnContext(strapiAssopage.content, strapiAssopage.content_en)}
          </p>
        </div>
        <TabSystemV
          tabContent={checkEnContext(
            strapiAssopage.tab_element,
            strapiAssopage.tab_element_en
          )}
        />
      </div>
    </>
  );
}
