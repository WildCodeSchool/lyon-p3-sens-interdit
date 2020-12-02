import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";

export default function Parole() {
  const { language } = useContext(LanguageContext);
  const [LANG, setLANG] = useState("");

  useEffect(() => {
    language === "en" ? setLANG("_en") : setLANG("");
  }, [language]);

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
      title={data.strapiParole["title" + LANG]}
      description={data.strapiParole["description" + LANG]}
      tab_element={data.strapiParole["tab_element" + LANG]}
    />
  );
}
