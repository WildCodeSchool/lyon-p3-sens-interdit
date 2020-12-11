import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import YouTube from "react-youtube";
import "../../globals/DisplayTabMenu/DisplayTabMenu.css";
import "../../../assets/styles/global.css";
import "./index.css";
import picto from "../../../assets/img/picto+.svg";
import SEO from "../../../components/SEO/seo";

export default function webRadio() {
  const { language, checkEnContext, LANG } = useContext(LanguageContext);

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
          seo_webradio {
            description
            description_en
            title
            title_en
            image {
              url
            }
            image_en {
              url
            }
          }
        }
      }
    }
  `);


const strapiWebradio = allStrapiWebradio.nodes[0];
const podCastLink = allStrapiWebradio.nodes[0].podcast;
const imageLink = allStrapiWebradio. nodes[0].image[0].url;
let seo = allStrapiWebradio.nodes[0].seo_webradio;
const title = LANG === 'en' ?  seo.title_en : seo.title;
const description = LANG === 'en' ? seo.description_en: seo.description;
const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;


  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
    <SEO 
      title={title !== undefined ? title : strapiWebradio["title" + LANG]} 
      description={description !== undefined ? description :strapiWebradio["description" + LANG] } 
      image={image !== undefined ? image : process.env.GATSBY_API_URL + podcast.image[0].url} />
    <div className="container">

      <img src={process.env.GATSBY_API_URL + imageLink } alt={strapiWebradio["title" + LANG]} className="image-webradio"/>
      <h3>{strapiWebradio["subtitle" + LANG]}</h3>
      <h1 className="to-uppercase">{strapiWebradio["title" + LANG]}</h1>
      <p>{strapiWebradio["description" + LANG]}</p>
      <div className="webRadioLink">
        {podCastLink.map((podcast) =>
            <div className="display-tab-sticker">
            <a href={podcast.url} title="link to podcast" target="_blank" rel="noreferrer" >
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
        )}
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
        {strapiWebradio.gallery.map(picture =>
        <img src={process.env.GATSBY_API_URL + picture.url} alt={picture.name} className="pictures" />
          )}
      </div>
    </div>
  </>
  );
}
