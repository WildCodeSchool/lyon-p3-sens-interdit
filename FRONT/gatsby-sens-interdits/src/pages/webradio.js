import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";
import { graphql, useStaticQuery } from "gatsby";

export default function Webradio() {
  const { LANG } = useContext(LanguageContext);
  const { strapiWebradio } = useStaticQuery(graphql`
    query MyQueryWebradio {
      strapiWebradio {
        id
        title
        title_en
        description
        description_en
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
        image={strapiWebradio.image[0].url}
        title={strapiWebradio["title" + LANG]}
        description={strapiWebradio["description" + LANG]}
      />
    </div>
  );
}
