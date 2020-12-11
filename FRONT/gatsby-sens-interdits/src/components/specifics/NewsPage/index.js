import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import TabSystemH from "../../globals/TabSystems/TabSystemH";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "../../../assets/styles/global.css";
import "../../../templates/article.css";
import LanguageContext from "../../context/LanguageContext";

export default function NewsPage() {
  const { checkEnContext } = useContext(LanguageContext);
  const strapiNewsQuery = useStaticQuery(graphql`
    query strapiNewsQuery {
      allStrapiNewspage {
        nodes {
          content
          content_en
          id
          title
          title_en
          carousel {
            image {
              id
              image {
                url
              }
            }
          }
        }
      }
      allStrapiArticlecontent {
        nodes {
          article
          article_en
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
            category_en
            id
          }
          title
          title_en
        }
      }
      allStrapiNewstab {
        nodes {
          newstab {
            id
            title
            title_en
          }
        }
      }
    }
  `);

  const newsPageQuery = strapiNewsQuery.allStrapiNewspage.nodes[0];
  const newsTabQuery = strapiNewsQuery.allStrapiNewstab.nodes[0];
  const newsArticlesQuery = strapiNewsQuery.allStrapiArticlecontent.nodes;
  const textOverFlow = true;
  const linkStatus = true;
  const imageArray =
    newsPageQuery.carousel !== null
      ? newsPageQuery.carousel.image.map(image => image.image)
      : false;

  return (
    <div>
      <ImageCarousel images={imageArray} />
      <div className="container">
        <div className="red-arrow"></div>
        <div>
          <h3 className="to-uppercase">
            {checkEnContext(newsPageQuery.title, newsPageQuery.title_en)}
          </h3>
          <p>
            {checkEnContext(newsPageQuery.content, newsPageQuery.content_en)}
          </p>
        </div>
        <div>
          <TabSystemH
            tabContent={newsTabQuery.newstab}
            articles={newsArticlesQuery}
            textOverFlow={textOverFlow}
            linkStatus={linkStatus}
          />
        </div>
      </div>
    </div>
  );
}
