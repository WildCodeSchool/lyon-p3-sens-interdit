import React from "react";
import ProgrammePage from "../components/specifics/Programme";
import { useStaticQuery, graphql } from "gatsby";

export default function Programme() {
  const data = useStaticQuery(graphql`
    query listProgrammes {
      allStrapiSpectacle {
        nodes {
          title
          strapiId
          horaires {
            Day
          }
          country
          place
          author
          thumbnail {
            internal {
              description
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
