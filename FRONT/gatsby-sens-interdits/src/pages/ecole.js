import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";
import { graphql, useStaticQuery } from "gatsby";

export default function Ecole() {
  const { LANG } = useContext(LanguageContext);

  const { strapiEcole } = useStaticQuery(graphql`
    query MyQueryEcole {
      strapiEcole {
        id
        title
        title_en
        description
        description_en
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
        image {
          id
          url
          name
        }
      }
    }
  `);
  return (
    <div>
      <GeneriquePage
        image={strapiEcole.image[0].url}
        title={strapiEcole["title" + LANG]}
        description={strapiEcole["description" + LANG]}
        tab_element={strapiEcole["tab_element" + LANG]}
      />
    </div>
  );
}
