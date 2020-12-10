import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import YouTube from "react-youtube";
import "../../globals/DisplayTabMenu/DisplayTabMenu.css";
import "../../../assets/styles/global.css";
import "./index.css";
import picto from "../../../assets/img/picto+.svg";

export default function webRadio() {
  const { language, LANG, checkEnContext } = useContext(LanguageContext);
  const { allStrapiWebradio } = useStaticQuery(graphql`
    query MyQueryWebradio {
      allStrapiWebradio {
        nodes {
          description
          description_en
          id
          gallery {
            url
          }
          image {
            url
          }
          title
          title_en
          subtitle
          subtitle_en
          podcast {
            author
            id
            title
            title_en
            url
            image {
              url
            }
          }
        }
      }
    }
  `);

  const strapiWebradio = allStrapiWebradio.nodes[0];
  const podCastLink = allStrapiWebradio.nodes[0].podcast;
  const imageLink = allStrapiWebradio.nodes[0].image[0].url;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="container">
      <img
        src={process.env.GATSBY_API_URL + imageLink}
        alt={strapiWebradio.title}
        className="image-webradio"
      />
      <h3>
        {checkEnContext(strapiWebradio.subtitle, strapiWebradio.subtitle_en)}
      </h3>
      <h1 className="to-uppercase">
        {checkEnContext(strapiWebradio.title, strapiWebradio.title_en)}
      </h1>
      <p>
        {checkEnContext(
          strapiWebradio.description,
          strapiWebradio.description_en
        )}
      </p>
      <div className="webRadioLink">
        {podCastLink.map(podcast => (
          <div className="display-tab-sticker">
            <a
              href={podcast.url}
              title="link to podcast"
              target="_blank"
              rel="noreferrer"
            >
              <div className="red-wrapper"></div>
              <img
                src={process.env.GATSBY_API_URL + podcast.image[0].url}
                alt={podcast.title}
                width="100%"
                height="100%"
                className="grayscale img-homepage"
              />
              <div className="display-tab-title">
                <img
                  className="display-tab-logo"
                  src={picto}
                  alt="pictogramme"
                  width="20"
                />
                <span>{podcast.title}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="youtube">
        <h3>
          {language === "fr"
            ? "Et découvrez leur formidable aventure dans le webdoc qui leur est consacré :"
            : "Discover their formidable adventure in the web documentary :"}
        </h3>
        <YouTube videoId="LbQQrlFXs8s" opts={opts} />
      </div>
      <div className="container-pictures">
        {strapiWebradio.gallery.map(picture => (
          <img
            src={process.env.GATSBY_API_URL + picture.url}
            alt={picture.name}
            className="pictures"
          />
        ))}
      </div>
    </div>
  );
}
