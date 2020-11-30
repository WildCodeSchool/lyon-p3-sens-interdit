import { graphql, useStaticQuery } from "gatsby";
import React from "react";
<<<<<<< HEAD
import GeneriquePage from "../components/specifics/Generique";
=======
import ScolairePage from "../components/specifics/ScolairePage";
>>>>>>> d60272eed85e108d5d554e57af7b929b75d5fd9f

export default function Scolaire() {
  const data = useStaticQuery(graphql`
    query scolaireQuery {
      strapiScolaire {
        id
        image {
          url
          id
        }
        tab_element {
          title
          content
        }
        title
        description
      }
    }
  `);

  return (
    <GeneriquePage
      image={data.strapiScolaire.image[0].url}
      title={data.strapiScolaire.title}
      description={data.strapiScolaire.description}
      tab_element={data.strapiScolaire.tab_element}
    />
  );
}
