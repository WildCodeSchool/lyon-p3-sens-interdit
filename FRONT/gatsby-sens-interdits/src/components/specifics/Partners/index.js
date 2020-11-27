import React from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";

import PartnerBlock from "./PartnerBlock";

export default function PartnersPage() {
  const data = useStaticQuery(graphql`
    query {
      partners: allStrapiPartnerpage {
        edges {
          node {
            partners_logo {
              id
              title
              logo {
                url
                image {
                  url
                  id
                }
              }
            }
            content
          }
        }
      }
    }
  `);

  const partnersLogo = data.partners.edges[0].node.partners_logo;
  const content = data.partners.edges[0].node.content;
  return (
    <>
      <ImageCarousel />
      <div className="global-margin">
        <div className="red-arrow"></div>
        <div className="partner-content">
          <h1>Les partenaires du festival</h1>
          <p>{content}</p>
        </div>
        {partnersLogo.map(elem => (
          <PartnerBlock key={elem.id} title={elem.title} img={elem.logo} />
        ))}
      </div>
    </>
  );
}
