import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./Association.css";
import "../../../assets/styles/global.css";
import { graphql, useStaticQuery } from "gatsby";
import TabSystemV from "../../globals/TabSystems/TabSystemV";
import SEO from "../../../components/SEO/seo";

export default function AssociationPage() {
  const { checkEnContext, LANG } = useContext(LanguageContext);
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
        seo_asso {
          description
          description_en
          id
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
    }
  `);
  const imageArray =
    strapiAssopage.carousel !== null
      ? strapiAssopage.carousel.image.map(image => image.image)
      : false;

  let seo = strapiAssopage.seo_asso;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en: seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;

  return (
    <>
      <SEO title={title !== undefined ? title : checkEnContext(strapiAssopage.title, strapiAssopage.title_en)} 
        description={description !== undefined ? description : ""}  
        image={image !== undefined ? image : ""} />
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
