import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./diffusion.css";
import "../../../assets/styles/global.css";
import LanguageContext from "../../context/LanguageContext";

export default function DiffusionPage() {
  const { checkEnContext } = useContext(LanguageContext);

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
      }
    }
  `);
  const imageArray =
    strapiDiffusionProduction.carousel !== null
      ? strapiDiffusionProduction.carousel.image.map(image => image.image)
      : false;
  return (
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
  );
}
