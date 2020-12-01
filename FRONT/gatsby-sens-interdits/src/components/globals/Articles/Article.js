import React from "react";
import "../../../assets/styles/global.css";
import "../../specifics/NewsPage/index.css";
import dayJs from "dayjs";
import "dayjs/locale/fr";
dayJs.locale("fr");

export default function Article (props) {   
    const article = props.article
     
    // console.log("articles in article componant",props)
   
    return (
        <a href="#" title={article.title} className="article-wrapper">
            <div className="article-resume" key={article.id}>
                <p className="article-date">Publié le {dayJs(article.date).format("DD MMMM YYYY")}</p>
                <h4 className="to-uppercase">{article.title}</h4>
                {/* <img>{article.image !== null ? article.image:""}</img> */}
                <div className="article-text">{article.article}</div>    
                {/* <img>{article.image !== null ? article.image:""}</img> */}
            </div>
        </a>
    )
}