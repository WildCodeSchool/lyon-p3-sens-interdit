import React from "react";
import ProgrammePage from "../components/specifics/Programme";
import { useStaticQuery, graphql } from "gatsby";

export default function ProgrammeTour() {
  const data = useStaticQuery(graphql`
    query listProgrammesTour {
      allStrapiSpectacle (filter: {type_of_events: {elemMatch: {category: {eq: "Tournees"}}}}){
        nodes {
          title
          strapiId
          horaires {
            Day
          }
          country
          place
          author
          type_of_events {
            category
          }
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