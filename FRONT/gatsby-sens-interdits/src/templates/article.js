import React, { useContext } from "react";
import Article from "../components/globals/Articles/Article.js";
import { graphql } from "gatsby";
// import { Link } from "gatsby";
import "./article.css";
import LanguageContext from "../components/context/LanguageContext.js";

export default function ArticlePage({ data }) {
  const { LANG } = useContext(LanguageContext);
  const textOverFlow = false;
  const linkStatus = false;

  return (
    // <Link to={"/articles/" + titleForLink.toLowerCase().replaceAll(" ", "-")}>
    <div id="articles-page" className="container">
      <Article
        article={data["article" + LANG]}
        textOverFlow={textOverFlow}
        linkStatus={linkStatus}
      />
    </div>
    // </Link>
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
