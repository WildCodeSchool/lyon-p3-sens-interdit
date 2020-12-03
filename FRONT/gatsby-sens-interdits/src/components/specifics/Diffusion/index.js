import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./diffusion.css"

export default function DiffusionPage() {
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
          title
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
                    <h3 className="to-uppercase">{strapiDiffusionProduction.title}</h3>
                    <p>{strapiDiffusionProduction.description}</p>
                </div>
                <nav id="diffusion-menu">
                    {strapiDiffusionProduction.squaremenu.map(elem =>
                        <DisplayTabMenu key={elem.id} title={elem.title} url={elem.url} image={elem.image[0].url} />
                    )
                    }
                </nav>
            </div>
        </div>
    )
}

