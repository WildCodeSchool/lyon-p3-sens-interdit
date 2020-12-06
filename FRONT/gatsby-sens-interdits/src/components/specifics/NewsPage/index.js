import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TabSystemH from "../../globals/TabSystems/TabSystemH";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "../../../assets/styles/global.css"
import "../../../templates/article.css";



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
            allStrapiArticlecontent {
                nodes {
                    article
                    date
                    id
                    picturebottom {
                          url
                    }
                    picturetop {
                          url
                    }
                    typeofarticles {
                      category
                      id
                    }
                    title
                  }
            }
            allStrapiNewstab {
                nodes {
                  newstab {
                    id
                    title
                  }
                }
              }
            
        }
      `)

    const newsPageQuery = strapiNewsQuery.allStrapiNewspage.nodes[0];
    const newsTabQuery = strapiNewsQuery.allStrapiNewstab.nodes[0]
    const newsArticlesQuery = strapiNewsQuery.allStrapiArticlecontent.nodes;
    const textOverFlow = true;
    const linkStatus = true;

    return (
        <div>
            <ImageCarousel/> {/* TODO : passer les props pour ce composant */}
            <div className ="container">
                <div className="red-arrow"></div>
                <div>
                    <h3 className="to-uppercase">{newsPageQuery.title}</h3>
                    <p>{newsPageQuery.content}</p>
                </div>
                <div>
                    <TabSystemH tabContent={newsTabQuery.newstab} articles={newsArticlesQuery} textOverFlow={textOverFlow} linkStatus={linkStatus}/>
                </div>  
            </div>
        </div>
    )
}