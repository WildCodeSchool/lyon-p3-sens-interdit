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

  const title =  data.strapiProgrammTour.seo_programm_tour.title ;
  const title_en =  data.strapiProgrammTour.seo_programm_tour.title_en ;
  const description_en =  data.strapiProgrammTour.seo_programm_tour.description_en ;
  const description =  data.strapiProgrammTour.seo_programm_tour.description ;

  console.log ("programme tour", title)

  return (
    <>
      {/* <SEO title={checkEnContext(title, title_en)} 
        description={checkEnContext(description, description_en)}  
        image={image !== undefined ? image : ""} /> */}

      <ProgrammePage list={data.allStrapiSpectacle.nodes} />
    </>
  );
}