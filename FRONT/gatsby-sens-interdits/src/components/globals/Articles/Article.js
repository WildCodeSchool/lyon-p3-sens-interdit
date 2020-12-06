import React from "react";
import { Link } from "gatsby";
import "../../../assets/styles/global.css";
import "../../../templates/article.css";
import dayJs from "dayjs";
import "dayjs/locale/fr";
dayJs.locale("fr");

const { sluggify } = require("../../../utils/Sluggify");
const { removeNameForUrl } = require("../../../utils/removeNameForUrl");


export default function Article (props) {   
    const article = props.article;
    const textOverFlow = props.textOverFlow;
    const linkStatus = props.linkStatus;
    console.log ({linkStatus});

    let articleSlug = sluggify(props.article.title);
    let articleId = removeNameForUrl(props.article.id, "Articlecontent");

   
    return (
        <>
        {linkStatus === true ? 
            <Link to={"/articles/" + articleSlug + articleId} title={article.title} className="article-wrapper">
                <div className="article-resume container" key={article.id}>
                    <p className="article-date">Publié le {dayJs(article.date).format("DD MMMM YYYY")}</p>
                    <h4 className="to-uppercase">{article.title}</h4>
                    <div>
                        {article.picturebottom[0] === undefined ?
                            ""
                            : <img className={textOverFlow === true ? "article-img-top-overflow" : "article-img"} src={process.env.GATSBY_API_URL + article.picturetop[0].url} alt={article.title}/>
                        }
                    </div>
                    <div className={textOverFlow === true ? "article-text-overflow" : "article-text"} >{article.article}</div> 
                    <div>
                        {article.picturetop[0] === undefined ?
                            ""
                            : <img className={textOverFlow === true ? "article-img-bottom-overflow" : "article-img"} src={process.env.GATSBY_API_URL + article.picturebottom[0].url} alt={article.title}/>
                        }
                    </div>   
                </div>
            </Link>
            
        :
            <div className="article-resume container" key={article.id}>
                <p className="article-date">Publié le {dayJs(article.date).format("DD MMMM YYYY")}</p>
                <h4 className="to-uppercase">{article.title}</h4>
                <div>
                    {article.picturebottom[0] === undefined ?
                        ""
                        : <img className={textOverFlow === true ? "article-img-top-overflow" : "article-img"} src={process.env.GATSBY_API_URL + article.picturetop[0].url} alt={article.title}/>
                    }
                </div>
                <div className={textOverFlow === true ? "article-text-overflow" : "article-text"} >{article.article}</div> 
                <div>
                    {article.picturetop[0] === undefined ?
                        ""
                        : <img className={textOverFlow === true ? "article-img-bottom-overflow" : "article-img"} src={process.env.GATSBY_API_URL + article.picturebottom[0].url} alt={article.title}/>
                    }
                </div>   
            </div>             
                
        }
        </>
    )
}