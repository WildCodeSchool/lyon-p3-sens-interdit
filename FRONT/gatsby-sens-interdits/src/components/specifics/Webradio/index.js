import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import YouTube from "react-youtube";
import "../../globals/DisplayTabMenu/DisplayTabMenu.css";
import "../../../assets/styles/global.css";
import "./index.css";
import picto from "../../../assets/img/picto+.svg";

export default function webRadio() {
  /* const { language, checkEnContext } = useContext(LanguageContext);

  const { strapiWebradio } = useStaticQuery(graphql`
    query MyQueryWebradio {
      strapiWebradio {
        id
        title
        title_en
        subtitle
        subtitle_en
        description
        description_en
        image {
          id
          url
          name
        }
        podcastlink {
          id
          title
          title_en
          url
          author
          image {
            url
          }
        }
        galery {
          url
        }
      }
    }
  `);
  const podcastlink = strapiWebradio.podcastlink;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
 */
  return (
    {/* <div className="container">
      <img
        src={process.env.GATSBY_API_URL + strapiWebradio.image[0].url}
        alt={checkEnContext(strapiWebradio.title, strapiWebradio.title_en)}
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
        {podcastlink.map(podcast => (
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
        {strapiWebradio.galery.map(picture => (
          <img
            src={process.env.GATSBY_API_URL + picture.url}
            alt={picture.name}
            className="pictures"
          />
        ))}
      </div>
    </div> */}
  );
}
