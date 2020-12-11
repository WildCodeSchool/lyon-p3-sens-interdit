import React, { useContext } from "react";
import Article from "../components/globals/Articles/Article.js";
import { graphql } from "gatsby";
import SEO from "../components/SEO/seo";
import LanguageContext from "../components/context/LanguageContext";

import "./article.css";

export default function ArticlePage({ data }) {
  const { language, checkEnContext , LANG} = useContext(LanguageContext);
  const textOverFlow = false;
  const linkStatus = false;
  const title = data.article.title;
  const title_en = data.article.title_en;
  const description = data.article.article;
  const description_en = data.article.article_en;

  const image = data.article.picturetop[0];
  console.log({image});
  

  return (

    <div id="articles-page" className="container">
      <SEO title={checkEnContext(title, title_en)} 
        description={checkEnContext(description, description_en)}  
        image={image !== undefined ? image.url : ""} />
      <Article
        article={data.article}
        textOverFlow={textOverFlow}
        linkStatus={linkStatus}
      />
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
    }
  }
`;
