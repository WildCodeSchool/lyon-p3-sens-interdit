import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import { graphql, useStaticQuery } from "gatsby";
import "./TransmissionsPage.css";

export default function TransmissionsPage() {
  const { LANG } = useContext(LanguageContext);
  const data = useStaticQuery(graphql`
    query transmissionQuery {
      allStrapiTransmission {
        nodes {
          carousel {
            image {
              image {
                url
              }
            }
          }
          procardcontent {
            image {
              url
            }
            credit
            credit_en
            url
          }
          publiccardcontent {
            image {
              url
            }
            credit
            credit_en
            url
          }
          description
          description_en
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
          {LANG !== "_en" ? (
            <h1>
              Ateliers-<span>Transmission</span>
            </h1>
          ) : (
            <h1>
              Workshops-<span>Transmission</span>
            </h1>
          )}
          <p>{transmission["description" + LANG]}</p>
        </div>
        <div className="transmission-grid-layout">
          <div className="transmission-public">
            {LANG !== "_en" ? (
              <h1>
                Avec <span>les publics</span>
              </h1>
            ) : (
              <h1>
                With <span>the audiences</span>
              </h1>
            )}

            {transmission.publiccardcontent.map(data => (
              <DisplayTabMenu
                key={data.id}
                image={data.image[0].url}
                title={data["credit" + LANG]}
                url={data.url}
              />
            ))}
          </div>

          <div className="transmission-pro">
            {LANG !== "_en" ? (
              <h1>
                Avec <span>les publics</span>
              </h1>
            ) : (
              <h1>
                With <span>the professionals</span>
              </h1>
            )}
            {transmission.procardcontent.map(data => (
              <DisplayTabMenu
                key={data.id}
                image={data.image[0].url}
                title={data["credit" + LANG]}
                url={data.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
