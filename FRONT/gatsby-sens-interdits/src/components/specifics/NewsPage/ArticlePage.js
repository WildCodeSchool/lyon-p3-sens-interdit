import React from "react";
import Article from "../../globals/Articles/Article";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";


export default function ArticlePage() {

    const strapiArticlePageQuery = useStaticQuery(graphql`
        query strapiArticlePageQuery {
            allStrapiArticlecontent {
                nodes {
                    article
                    date
                    id
                    picturebottom {
                      formats {
                        medium {
                          url
                        }
                      }
                    }
                    typeofarticles {
                      category
                      id
                    }
                    title
                  }
            }
        }
    `)    

    const articlePageQuery = strapiArticlePageQuery.allStrapiArticlecontent.nodes;

    return (
        <div>
            {articlePageQuery.map((article) =>
                    <div>
                        <Article article={article}/>
                    </div>
            )}

        </div>


    )
}
