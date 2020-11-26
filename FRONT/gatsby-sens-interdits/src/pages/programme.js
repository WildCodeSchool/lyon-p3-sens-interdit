import React from "react";
import ProgrammePage from "../components/specifics/Programme";
import { useStaticQuery, graphql } from "gatsby";

export default function Programme() {
  const data = useStaticQuery(graphql`
    query listProgrammes {
      allStrapiSpectacle {
        nodes {
          id
          title
          strapiId
          duration
          horaires {
            Day
          }
          tab_element {
            content
            credited_image {
              credit
              image {
                alternativeText
                id
                url
              }
            }
          }
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
