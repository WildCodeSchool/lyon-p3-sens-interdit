import React from "react";
import picto from "../../../assets/img/picto+.svg";
import "./DisplayTabMenu.css";

export default function tabMenuContent({ props }) {
    const content = {...props}

    return (<>
        <div className="red-wrapper" />
        <img
            src={process.env.GATSBY_API_URL + props.image}
            alt={ props.title.title ? props.title.title : props.title }
            width="100%"
            className="grayscale img-homepage"
        />
        <div className="display-tab-title">
            <img
                className="display-tab-logo"
                src={picto}
                alt="pictogramme"
                width="20"
            />
            <h2>{ props.title.title ? props.title.title : props.title }</h2>
        </div>
    </>
    )
}
