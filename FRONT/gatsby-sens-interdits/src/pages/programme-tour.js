import React, {useContext} from "react";
import ProgrammePage from "../components/specifics/Programme";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/SEO/seo";
import LanguageContext from "../components/context/LanguageContext";

export default function ProgrammeTour() {

  const { LANG, checkEnContext } = useContext(LanguageContext);

  const data = useStaticQuery(graphql`
    query listProgrammesTour {
      allStrapiSpectacle (filter: {type_of_events: {elemMatch: {category: {eq: "Tournees"}}}}){
        nodes {
          title
          strapiId
          horaires {
            Day
          }
          country
          place
          author
          type_of_events {
            category
          }
          thumbnail {
            internal {
              description
            }
          }
        }
      }
      strapiProgrammTour {
        seo_programm_tour {
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

  const seo = data.strapiProgrammTour.seo_programm_tour
  const title =  LANG === 'en' ? seo.title_en : seo.title ;
  const description =   LANG === 'en' ? seo.description_en : seo.description ;
  const image =  LANG === 'en' ? seo.image_en : seo.image ;

  return (
    <>
      <SEO title={title !== undefined ? title : ""} 
        description={description !== undefined ? description : ""} 
        image={image !== undefined ? image : ""}/>
      <ProgrammePage list={data.allStrapiSpectacle.nodes} />
    </>
  );
}