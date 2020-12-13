import React, { useContext } from "react";
import Article from "../components/globals/Articles/Article.js";
import { graphql } from "gatsby";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";
import SEO from "../components/SEO/seo";
import LanguageContext from "../components/context/LanguageContext";

import "./article.css";
import "../assets/styles/global.css";

export default function ArticlePage({ data }) {
  const { checkEnContext} = useContext(LanguageContext);
  const textOverFlow = false;
  const linkStatus = false;
  const title = data.article.title;
  const title_en = data.article.title_en;
  const description = data.article.article;
  const description_en = data.article.article_en;
  const image = data.article.picturetop[0];
  const carousel = data.article.carousel;
  console.log (carousel);
  const imageArray =
    carousel!== undefined
      ? carousel.map(image => image.image)
      : false;



  return (

    <div id="articles-page">
      <SEO title={checkEnContext(title, title_en)}
        description={checkEnContext(description, description_en)}
        image={image !== undefined ? image.url : ""} />
      <ImageCarousel 
        title={checkEnContext(title, title_en)}
        images={imageArray}
        displayed={true}
      />
      <div className="container">
          <div className="red-arrow"></div>
          <div>
            <Article
              article={data.article}
              textOverFlow={textOverFlow}
              linkStatus={linkStatus}
            />
          </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    article: strapiArticlecontent(id: { eq: $id }) {
      article
      article_en
      date
      id
      title
      title_en
      picturebottom {
        url
      }
      picturetop {
        url
      }
      carousel {
        credit
        credit_en
        id
        redtitle
        image {
          url
        }
      }
    }
  }
`;
