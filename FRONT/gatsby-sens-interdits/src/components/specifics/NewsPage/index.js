import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TabSystemH from "../../globals/TabSystems/TabSystemH";
import "../../../assets/styles/global.css";
import "./index.css";



export default function NewsPage() {

    const strapiNewsQuery = useStaticQuery(graphql`
        query strapiNewsQuery {
            allStrapiNewspage {
                nodes {
                    content
                    id
                    title
                }
            }
            allStrapiNewstab {
                nodes {
                    newstab {
                        id
                        title
                        articlecontent {
                            article
                            date
                            id
                            title
                        }
                    }
                }
            }
        }
      `)

    const newsPageQuery = strapiNewsQuery.allStrapiNewspage.nodes[0];
    const newsTabQuery = strapiNewsQuery.allStrapiNewstab.nodes[0].newstab;

    return (
        <div id ="news-page">
            <div className="red-arrow"></div>
            <div>
                <h3 className="to-uppercase">{newsPageQuery.title}</h3>
                <p>{newsPageQuery.content}</p>
            </div>
            <div>
                <TabSystemH tabContent={newsTabQuery}/>
            </div>   
        </div>
    )
}