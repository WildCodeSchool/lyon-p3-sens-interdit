import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import GeneriquePage from "../components/specifics/Generique";
import SEO from "../components/SEO/seo";


export default function Scolaire() {
  const { checkEnContext, LANG } = useContext(LanguageContext);

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
        seo_seminaire {
          description
          description_en
          id
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
  let seo = strapiSeminaire.seo_seminaire;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en: seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;


  return (
    <>
      <SEO title={title !== undefined ? title : checkEnContext(strapiSeminaire.title, strapiSeminaire.title_en)} 
        description={description !== undefined ? description : checkEnContext(strapiSeminaire.description, strapiSeminaire.description_en)}  
        image={image !== undefined ? image : strapiSeminaire.image[0].url} />
    <GeneriquePage
      image={strapiSeminaire.image[0].url}
      title={checkEnContext(strapiSeminaire.title, strapiSeminaire.title_en)}
      description={checkEnContext(
        strapiSeminaire.description,
        strapiSeminaire.description_en
      )}
      tab_element={checkEnContext(
        strapiSeminaire.tab_element,
        strapiSeminaire.tab_element_en
      )}
    />
    </>
  );
}
