import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./diffusion.css";
import "../../../assets/styles/global.css";
import LanguageContext from "../../context/LanguageContext";
import SEO from "../../../components/SEO/seo";


export default function DiffusionPage() {
  const { checkEnContext, LANG } = useContext(LanguageContext);

  const { strapiDiffusionProduction } = useStaticQuery(graphql`
    query MyQueryDiffusion {
      strapiDiffusionProduction {
        carousel {
          id
          image {
            credit
            image {
              url
              id
            }
            credit_en
          }
        }
        description
        description_en
        title
        title_en
        squaremenu {
          id
          title
          title_en
          url
          image {
            url
            id
          }
        }
        seo_diffusionproduction {
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
  const imageArray =
    strapiDiffusionProduction.carousel !== null
      ? strapiDiffusionProduction.carousel.image.map(image => image.image)
      : false;

  let seo = strapiDiffusionProduction.seo_diffusionproduction;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en: seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;

  return (
    <>
    <SEO title={title !== undefined ? title : checkEnContext(strapiDiffusionProduction.title, strapiDiffusionProduction.title_en)} 
      description={description !== undefined ? description : checkEnContext(strapiDiffusionProduction.description,strapiDiffusionProduction.description_en)}  
      image={image !== undefined ? image : ""} />
    <div className="global-diffusion">
      <ImageCarousel images={imageArray} />
      <div className="container">
        <div id="diffusion-description">
          <div className="red-arrow"></div>
          <h1 className="to-uppercase">
            {checkEnContext(
              strapiDiffusionProduction.title,
              strapiDiffusionProduction.title_en
            )}{" "}
          </h1>
          <p>
            {checkEnContext(
              strapiDiffusionProduction.description,
              strapiDiffusionProduction.description_en
            )}
          </p>
        </div>
        <nav id="diffusion-menu">
          {strapiDiffusionProduction.squaremenu.map(elem => (
            <DisplayTabMenu
              key={elem.id}
              title={checkEnContext(elem.title, elem.title_en)}
              url={elem.url}
              image={elem.image[0].url}
            />
          ))}
        </nav>
      </div>
    </div>
    </>
  );
}
