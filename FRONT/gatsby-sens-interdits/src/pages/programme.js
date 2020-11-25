import React from "react";
import ProgrammePage from "../components/specifics/Programme";
import { useStaticQuery, graphql } from "gatsby";

export default function Programme() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSpectacle {
        nodes {
          id
          title
          tab_element {
            content
            id
            title
            credited_image {
              credit
              image {
                alternativeText
                id
                url
              }
              id
            }
          }

          duration
        }
      }
    }
  `);

  return (
    <>
      <ProgrammePage list={data.allStrapiSpectacle.nodes} />
    </>
  );
}
