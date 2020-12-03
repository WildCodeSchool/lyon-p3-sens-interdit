import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import GeneriquePage from "../components/specifics/Generique";

export default function Scolaire() {
  const { LANG } = useContext(LanguageContext);

  const { strapiSeminaire } = useStaticQuery(graphql`
    query seminaireQuery {
      strapiSeminaire {
        description
        description_en
        title
        title_en
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
        tab_element_en {
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
      image={strapiSeminaire.image[0].url}
      title={strapiSeminaire["title" + LANG]}
      description={strapiSeminaire["description" + LANG]}
      tab_element={strapiSeminaire["tab_element" + LANG]}
    />
  );
}
