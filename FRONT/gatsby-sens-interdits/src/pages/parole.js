import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";
import SEO from "../components/SEO/seo";

export default function Parole() {
  const { checkEnContext, LANG } = useContext(LanguageContext);

  const data = useStaticQuery(graphql`
    query paroleQuery {
      strapiParole {
        id
        image {
          url
          id
        }
        tab_element {
          id
          title
          content
        }
        tab_element_en {
          id
          title
          content
        }
        title
        title_en
        description
        description_en
        seo_parole {
          description
          description_en
          image {
            url
          }
          image_en {
            url
          }
          title
          title_en
        }
      }
    }
  `);

  let seo = data.strapiParole.seo_parole;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en: seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;

  return (
    <>
      <SEO title={title !== undefined ? title : checkEnContext(data.strapiParole.title, data.strapiParole.title_en)}
        description={description !== undefined ? description : ""}
        image={image !== undefined ? image : data.strapiParole.image[0].url} />
      <GeneriquePage
        image={data.strapiParole.image[0].url}
        title={checkEnContext(
          data.strapiParole.title,
          data.strapiParole.title_en
        )}
        description={checkEnContext(
          data.strapiParole.description,
          data.strapiParole.description_en
        )}
        tab_element={checkEnContext(
          data.strapiParole.tab_element,
          data.strapiParole.tab_element_en
        )}
      />
    </>
  );
}
