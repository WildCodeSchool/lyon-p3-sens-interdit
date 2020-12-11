import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import GeneriquePage from "../components/specifics/Generique";
import SEO from "../components/SEO/seo";


export default function Scolaire() {
  const { checkEnContext, LANG} = useContext(LanguageContext);

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
        seo_scolaire {
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

  let seo = strapiScolaire.seo_scolaire;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en: seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;
console.log ({seo})

  return (
    <>
      <SEO title={title !== undefined ? title : checkEnContext(strapiScolaire.title, strapiScolaire.title_en)} 
        description={description !== undefined ? description : ""}  
        image={image !== undefined ? image : strapiScolaire.image[0].url} />
      <GeneriquePage
        image={strapiScolaire.image[0].url}
        title={checkEnContext(
            strapiScolaire.title,
          strapiScolaire.title_en
        )}
        description={checkEnContext(
          strapiScolaire.description,
          strapiScolaire.description_en
        )}
        tab_element={checkEnContext(
          strapiScolaire.tab_element,
          strapiScolaire.tab_element_en
        )}
      />
    </>
  );
}
