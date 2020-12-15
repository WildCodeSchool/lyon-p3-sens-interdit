import React, { useContext } from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";
import "../../../assets/styles/global.css";
import SEO from "../../../components/SEO/seo";

import PartnerBlock from "./PartnerBlock";
import LanguageContext from "../../context/LanguageContext";

export default function PartnersPage() {
  const { LANG } = useContext(LanguageContext);
  const data = useStaticQuery(graphql`
    query {
      partners: allStrapiPartnerpage {
        edges {
          node {
            partners_logo {
              id
              title
              title_en
              logo {
                url
                image {
                  url
                  id
                }
              }
            }
            content
            content_en
            title
            title_en
            seo_partner {
              description
              description_en
              title
              title_en
              image {
                url
              }
              image_en {
                url
              }
            }
            carousel {
              image {
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const partner = data.partners.edges[0].node;
  const partnersLogo = data.partners.edges[0].node.partners_logo;
  const content = data.partners.edges[0].node["content" + LANG];

  let seo = partner.seo_partner;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en : seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;


  const imageArray =
    data.partners.edges[0].node.carousel !== null
      ? data.partners.edges[0].node.carousel.image.map(image => image.image)
      : false;
  return (
    <>
       <SEO
      title={title !== undefined ? title : partner["title" + LANG]}
      description={description !== undefined ? description : partner["description" + LANG] }
      image={image !== undefined ? image : ""} />
      <ImageCarousel images={imageArray} />
      <div className="container">
        <div className="red-arrow"></div>
        <div className="partner-content">
          <h1>{data.partners.edges[0].node["title" + LANG]}</h1>
          <p>{content}</p>
        </div>
        {partnersLogo.map(elem => (
          <PartnerBlock
            key={elem.id}
            title={elem["title" + LANG]}
            img={elem.logo}
          />
        ))}
      </div>
    </>
  );
}
