import React from "react";
import Article from "../components/globals/Articles/Article.js";
import { graphql } from "gatsby";
// import { Link } from "gatsby";
import "./article.css";

export default function ArticlePage({data}) {

    const article = data.article;
    const textOverFlow = false;
    // console.log ('titre', titleForLink)

    return (
      // <Link to={"/articles/" + titleForLink.toLowerCase().replaceAll(" ", "-")}>
        <div id="articles-page">
            <Article article={article} textOverFlow={textOverFlow}/>
        </div>
      // </Link>
    )
}

export const query = graphql`
  query($id: String!) {
    article: strapiArticlecontent(id: { eq: $id }) {
        article
        date
        id
        title
        picturebottom {
            url
        }
        picturetop {
            url
        }
    }
  }
`;
