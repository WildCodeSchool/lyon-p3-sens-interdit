import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../../../components/SEO/seo";
import TabSystemH from "../../globals/TabSystems/TabSystemH";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "../../../assets/styles/global.css";
import "../../../templates/article.css";
import LanguageContext from "../../context/LanguageContext";

export default function NewsPage() {
  const { checkEnContext, LANG} = useContext(LanguageContext);
  const strapiNewsQuery = useStaticQuery(graphql`
    query strapiNewsQuery {
      allStrapiNewspage {
        nodes {
          content
          content_en
          id
          title
          title_en
          seo_newspage {
            description
            description_en
            image {
              url
            }
            image_en {
              url
            }
            title
            title_en
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
  let seo = newsPageQuery.seo_newspage;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en : seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;

  return (
    <>
      <SEO 
        title={title !== undefined ? title : newsPageQuery["title" + LANG]} 
        description={description !== undefined ? description : newsPageQuery["description" + LANG] } 
        image={image !== undefined ? image : newsTabQuery.picturetop[0].url} />
      <div>
        <ImageCarousel />
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
    </>
  );
}
