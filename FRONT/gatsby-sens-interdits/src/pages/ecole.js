import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/SEO/seo";


export default function Ecole() {
    const { language, LANG, checkEnContext } = useContext(LanguageContext);

    const { strapiEcole } = useStaticQuery(graphql`
    query MyQueryEcole {
      strapiEcole {
        id
        title
        title_en
        description
        description_en
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
        image {
          id
          url
          name
        }
        seo_ecole {
          description
          description_en
          id
          title
          title_en
          image_en {
            url
          }
          image {
            url
          }
        }
      }
    }
  `);

    let seo = strapiEcole.seo_ecole;
    const title = LANG === 'en' ?  seo.title_en : seo.title;
    const description = LANG === 'en' ? seo.description_en: seo.description;
    const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;

    return (
        <>
            <SEO title={title !== undefined ? title : checkEnContext(strapiEcole.title, strapiEcole.title_en)} 
            description={description !== undefined ? description : checkEnContext(strapiEcole.description,strapiEcole.description_en)}  
            image={image !== undefined ? image : strapiEcole.image[0].url} />
            <div>
                <GeneriquePage
                    image={strapiEcole.image[0].url}
                    title={checkEnContext(strapiEcole.title, strapiEcole.title_en)}
                    description={checkEnContext(
                        strapiEcole.description,
                        strapiEcole.description_en
                    )}
                    tab_element={checkEnContext(
                        strapiEcole.tab_element,
                        strapiEcole.tab_element_en
                    )}
                />
            </div>
        </>
    );
}
