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
          duration
          horaires {
            Day
          }
          tab_element {
            content
            credited_image {
              credit
              image {
                url
              }
            }
            title
          }
          country
          carousel {
            id
            image {
              image {
                url
              }
            }
          }
          accessibility {
            url
          }
          partners {
            url
          }
          place
          tarif {
            tarif
            category {
              category
            }
          }
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
