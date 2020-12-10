
import React from "react";
import "./tabSystemGlobal.css";


export default function TabSystemContent (props) {
    const tab = props.tab
    const DisplayPicture = props.DisplayPicture;

    return (
        <div className="texte-picture-content">
            <p>{tab.content}</p>
            {tab.credited_image.length !== 0 ? 
            <DisplayPicture imageContent={tab.credited_image} />
            : null}
        </div>
    )  
}
