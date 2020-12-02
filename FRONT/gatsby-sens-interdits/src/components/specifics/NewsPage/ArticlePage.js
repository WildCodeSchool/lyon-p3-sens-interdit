import React from "react";
import Article from "../../globals/Articles/Article";
import { graphql, useStaticQuery } from "gatsby";
// import { Link } from "gatsby";
import "./index.css";

export default function ArticlePage() {

    const strapiArticlePageQuery = useStaticQuery(graphql`
        query strapiArticlePageQuery {
            allStrapiArticlecontent {
              nodes {
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
        }
    `)    

    const articlePageQuery = strapiArticlePageQuery.allStrapiArticlecontent.nodes;
    const titleForLink = strapiArticlePageQuery.allStrapiArticlecontent.nodes[0].title;
    const textOverFlow = false;
    console.log ('titre', titleForLink)

    return (
      // <Link to={"/articles/" + titleForLink.toLowerCase().replaceAll(" ", "-")}>
        <div id="articles-page">
            {articlePageQuery.map((article) =>
                    <div>
                        <Article article={article} textOverFlow={textOverFlow}/>
                    </div>
            )}
        </div>
      // </Link>
    )
}
