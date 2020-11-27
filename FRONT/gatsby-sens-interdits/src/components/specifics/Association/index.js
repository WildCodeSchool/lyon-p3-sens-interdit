import React from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "./Association.css";
import { graphql, useStaticQuery } from "gatsby";
import TabSystemV from "../../globals/TabSystems/TabSystemV";


export default function AssociationPage() {
    const { strapiAssopage } = useStaticQuery(graphql`
    query MyQueryAsso {
        strapiAssopage {
            id
            title
            content
            carousel {
              id
              image {
                credit
                id
                image {
                  url
                }
              }
            }
            tab_element {
              content
              id
              title
              credited_image {
                id
                image {
                  url
                }
              }
            }
          }
    }`)
    const imageArray =
        strapiAssopage.carousel !== null
            ? strapiAssopage.carousel.image.map(image => image.image)
            : false;
    return (
        <>
            <ImageCarousel images={imageArray} />
            <div className="global-margin">
                <div className="red-arrow"></div>
                <div className="association-content">
                    <h1 className="to-uppercase">{strapiAssopage.title}</h1>
                    <p>
                        {strapiAssopage.content}
                    </p>
                </div>
                <div>
                    <TabSystemV tabContent={strapiAssopage.tab_element} />
                </div>
            </div>
        </>
    );
}