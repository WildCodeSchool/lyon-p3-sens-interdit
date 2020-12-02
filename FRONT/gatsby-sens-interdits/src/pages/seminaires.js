import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import GeneriquePage from "../components/specifics/Generique";

export default function Scolaire() {
  const data = useStaticQuery(graphql`
    query seminaireQuery {
      strapiSeminaire {
        description
        title
        image {
          url
          id
        }
        tab_element {
          content
          title
          image {
            url
          }
        }
      }
    }
  `);

  return (
    <GeneriquePage
      image={data.strapiSeminaire.image[0].url}
      title={data.strapiSeminaire.title}
      description={data.strapiSeminaire.description}
      tab_element={data.strapiSeminaire.tab_element}
    />
  );
}
