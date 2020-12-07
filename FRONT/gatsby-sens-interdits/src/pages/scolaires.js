import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import GeneriquePage from "../components/specifics/Generique";

export default function Scolaire() {
  const { LANG } = useContext(LanguageContext);

  const { strapiScolaire } = useStaticQuery(graphql`
    query scolaireQuery {
      strapiScolaire {
        id
        image {
          url
          id
        }
        tab_element {
          id
          content
          title
          image {
            url
          }
        }
        tab_element_en {
          id
          content
          title
          image {
            url
          }
        }
        title
        title_en
        description
        description_en
      }
    }
  `);

  return (
    <GeneriquePage
      image={strapiScolaire.image[0].url}
      title={strapiScolaire["title" + LANG]}
      description={strapiScolaire["description" + LANG]}
      tab_element={strapiScolaire["tab_element" + LANG]}
    />
  );
}
