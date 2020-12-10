import React, { useContext } from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";
import "../../../assets/styles/global.css";


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
          }
        }
      }
    }
  `);

  const partnersLogo = data.partners.edges[0].node.partners_logo;
  const content = data.partners.edges[0].node["content" + LANG];
  return (
    <>
      <ImageCarousel />
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
