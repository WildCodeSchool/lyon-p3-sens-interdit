import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./Association.css";
import { graphql, useStaticQuery } from "gatsby";
import TabSystemV from "../../globals/TabSystems/TabSystemV";

export default function AssociationPage() {
  const { LANG } = useContext(LanguageContext);
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
      <div className="global-margin">
        <div className="red-arrow"></div>
        <div className="association-content">
          <h1 className="to-uppercase">{strapiAssopage["title" + LANG]}</h1>
          <p>{strapiAssopage["content" + LANG]}</p>
        </div>
        <TabSystemV tabContent={strapiAssopage["tab_element" + LANG]} />
      </div>
    </>
  );
}
