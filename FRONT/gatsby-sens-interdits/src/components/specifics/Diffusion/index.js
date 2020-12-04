import React, { useContext } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./diffusion.css"
import LanguageContext from "../../context/LanguageContext";

export default function DiffusionPage() {
  const { LANG } = useContext(LanguageContext);

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
      `)
  const imageArray =
    strapiDiffusionProduction.carousel !== null
      ? strapiDiffusionProduction.carousel.image.map(image => image.image)
      : false;
  return (
    <div className="global-diffusion">
      <ImageCarousel images={imageArray} />
      <div id="diffusion-content">
        <div id="diffusion-description">
          <div className="red-arrow"></div>
          <h3 className="to-uppercase">{strapiDiffusionProduction["title" + LANG]}</h3>
          <p>{strapiDiffusionProduction["description" + LANG]}</p>
        </div>
        <nav id="diffusion-menu">
          {strapiDiffusionProduction.squaremenu.map(elem =>
            <DisplayTabMenu key={elem.id} title={elem["title" + LANG]} url={elem.url} image={elem.image[0].url} />
          )
          }
        </nav>
      </div>
    </div>
  )
}

