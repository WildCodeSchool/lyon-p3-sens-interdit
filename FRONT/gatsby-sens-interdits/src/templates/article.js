import React from "react";
import Article from "../components/globals/Articles/Article.js";
import { graphql } from "gatsby";
// import { Link } from "gatsby";
import "./article.css";

export default function ArticlePage({ data }) {
  const textOverFlow = false;
  const linkStatus = false;

  return (
    // <Link to={"/articles/" + titleForLink.toLowerCase().replaceAll(" ", "-")}>
    <div id="articles-page" className="container">
      <Article
        article={data.article}
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
