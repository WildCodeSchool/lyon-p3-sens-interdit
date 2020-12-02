import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";

export default function Parole() {
  const { language } = useContext(LanguageContext);
  const data = useStaticQuery(graphql`
    query paroleQuery {
      strapiParole {
        id
        image {
          url
          id
        }
        tab_element {
          title
          content
        }
        tab_element_en {
          title
          content
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
      image={data.strapiParole.image[0].url}
      title={
        language === "fr" ? data.strapiParole.title : data.strapiParole.title_en
      }
      description={
        language === "fr"
          ? data.strapiParole.description
          : data.strapiParole.description_en
      }
      tab_element={
        language === "fr"
          ? data.strapiParole.tab_element
          : data.strapiParole.tab_element_en
      }
    />
  );
}
