import React, {useContext, useEffect, useRef, useState} from "react";
import {graphql, useStaticQuery} from "gatsby";
import SEO from "../../../components/SEO/seo";
import TabSystemH from "../../globals/TabSystems/TabSystemH";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import "../../../assets/styles/global.css";
import "../../../templates/article.css";
import LanguageContext from "../../context/LanguageContext";
import TabSystemV from "../../globals/TabSystems/TabSystemV";

export default function NewsPage() {
    const [isMobile, _setIsMobile] = useState(false);
    const isMobileRef = useRef(isMobile);

    function setIsMobile(data) {
        isMobileRef.current = data;
        _setIsMobile(data);
    }

    const {checkEnContext, LANG} = useContext(LanguageContext);
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

    const imageArray =
        newsPageQuery.carousel !== null
            ? newsPageQuery.carousel.image.map(image => image.image)
            : false;

    let seo = newsPageQuery.seo_newspage;
    const title = LANG === 'en' ? seo.title_en : seo.title;
    const description = LANG === 'en' ? seo.description_en : seo.description;
    const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;


    function checkIsMobile() {
        if (window.innerWidth < 670) {
            setIsMobile(true);
        }
    }


    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }
    }, []);
// TODO make america great again - fill content with article
    return (
        <>
            <SEO
                title={title !== undefined ? title : newsPageQuery["title" + LANG]}
                description={description !== undefined ? description : newsPageQuery["description" + LANG]}
                image={image !== undefined ? image : newsTabQuery.picturetop[0].url}/>
            <div>
                <ImageCarousel images={imageArray}/>
                <div className="container">
                    <div className="red-arrow"/>
                    <div>
                        <h3 className="to-uppercase">
                            {checkEnContext(newsPageQuery.title, newsPageQuery.title_en)}
                        </h3>
                        <p>
                            {checkEnContext(newsPageQuery.content, newsPageQuery.content_en)}
                        </p>
                    </div>
                    <div>
                        {isMobileRef.current ?
                            <TabSystemV
                                tabContent={newsTabQuery.newstab}
                                articles={newsArticlesQuery}
                                textOverFlow={textOverFlow}
                                linkStatus={linkStatus}>
                            </TabSystemV>
                            :
                            <TabSystemH
                                tabContent={newsTabQuery.newstab}
                                articles={newsArticlesQuery}
                                textOverFlow={textOverFlow}
                                linkStatus={linkStatus}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
