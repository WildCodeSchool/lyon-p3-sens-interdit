import React from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import { graphql, useStaticQuery } from "gatsby";
import "./TransmissionsPage.css";

export default function TransmissionsPage() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTransmission {
        nodes {
          description
          id
          pro_card_content {
            credit
            id
            image {
              url
              name
            }
          }
          public_card_content {
            credit
            id
            image {
              name
              url
              id
            }
          }
          carousel {
            id
            image {
              image {
                url
                name
              }
              id
            }
          }
        }
      }
    }
  `);

  const transmission = data.allStrapiTransmission.nodes[0];

  const imageArray =
    transmission.carousel !== null
      ? transmission.carousel.image.map(image => image.image)
      : false;

  return (
    <>
      <ImageCarousel images={imageArray} displayed={false} />
      <div className="global-margin">
        <div className="red-arrow"></div>
        <div className="transmission-content">
          <h1>
            <span>Ateliers-</span>Transmission
          </h1>
          <p>{transmission.description}</p>
        </div>
        <div className="transmission-grid-layout">
          <div className="transmission-public">
            <h1>
              Avec <span>les publics</span>
            </h1>
            {transmission.public_card_content.map(data => (
              <DisplayTabMenu image={data.image} title={data.credit} />
            ))}
          </div>

          <div className="transmission-pro">
            <h1>
              Avec <span>les professionnels</span>
            </h1>
            {transmission.pro_card_content.map(data => (
              <DisplayTabMenu image={data.image} title={data.credit} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
